"""
Consume an S3 create event, download the file, run some analysis, return the
key points.
"""

import os
import io
import json

import boto3
import cv2
import numpy
import dlib

BUCKET_NAME = 'lowpoly'
IS_LOCAL = False
UPLOAD_ANYWAY = False

predictor_path = os.path.join(
    os.path.dirname(__file__),
    'shape_predictor_68_face_landmarks.dat'
)


def create_opencv_image_from_stringio(img_stream, cv2_img_flag=0):
    img_stream.seek(0)
    img_array = np.asarray(bytearray(img_stream.read()), dtype=np.uint8)
    return cv2.imdecode(img_array, cv2_img_flag)


def identify_points_by_grid(img, N):
    """
    Create a grid using 1/N. Higher N means more points (higher resolution).
    """

    # Method: NxN grid
    height, width, channels = img.shape
    height_n = height / N
    width_n = width / N
    points = []
    for x in range(width):
        if x % width_n == 0 or x == width - 1:
            for y in range(height):
                if y % height_n == 0 or y == height - 1:
                    point = (x, y)
                    points.append(point)

    return points


def identify_points_by_key_points(img, max_points):
    """
    Method: Key points.
    """

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    sift = cv2.xfeatures2d.SIFT_create(max_points)
    key_points = sift.detect(gray, None)

    # # Get desciptors but not sure what that helps with
    # key_points, descriptors = sift.compute(gray, key_points)

    points = map(
        lambda point: (int(point.pt[0]), int(point.pt[1])),
        key_points
    )

    return points


def identify_points_by_canny_edge_detection(img):
    """
    Method: canny edge detection
    """

    # TODO: Pretty sure the img is supposed to be grayscale

    # Here is where we can explore how canny is used https://github.com/ghostwriternr/lowpolify/blob/master/scripts/lowpolify.py#L135

    edges = cv2.Canny(img, 300, 500)

    from matplotlib import pyplot as plt
    plt.subplot(121)
    plt.imshow(img, cmap='gray')
    plt.title('Original Image')
    plt.xticks([])
    plt.yticks([])
    plt.subplot(122)
    plt.imshow(edges, cmap='gray')
    plt.title('Edge Image')
    plt.xticks([])
    plt.yticks([])
    plt.show()


def identify_facial_landmarks(img):
    """
    Use dlib to identify facial landmarks.
    """

    points = []

    detector = dlib.get_frontal_face_detector()
    predictor = dlib.shape_predictor(predictor_path)

    faces = detector(img, 1)
    face_bounds = []  # Calculate face bounds from landmarks, not face detector
    for face in faces:
        shape = predictor(img, face)
        landmarks = []
        for i in range(shape.num_parts):
            part = shape.part(i)
            x = int(part.x)
            y = int(part.y)
            landmark = (x, y)
            landmarks.append(landmark)
        points += landmarks

        # https://www.pyimagesearch.com/wp-content/uploads/2017/04/facial_landmarks_68markup-768x619.jpg
        max_x = max(landmarks, key=lambda point: point[0])[0]
        max_y = max(landmarks, key=lambda point: point[1])[1]
        min_x = min(landmarks, key=lambda point: point[0])[0]
        min_y = min(landmarks, key=lambda point: point[1])[1]
        upper_left = (min_x, min_y)
        bottom_right = (max_x, max_y)
        face_bound = [upper_left, bottom_right]
        face_bounds.append(face_bound)

    return points, face_bounds


def identify_points(img, max_points):
    """
    Use a method to identify points
    """

    # points = identify_points_by_grid(img, 25)
    key_points = identify_points_by_key_points(img, max_points)
    landmarks, face_bounds = identify_facial_landmarks(img)
    edges = identify_points_by_canny_edge_detection(img)

    # Remove any key_points within any face_bound
    for key_point in key_points:
        for face_bound in face_bounds:
            x = key_point[0]
            y = key_point[1]
            min_x = face_bound[0][0]
            min_y = face_bound[0][1]
            max_x = face_bound[1][0]
            max_y = face_bound[1][1]
            if min_x <= x and x <= max_x and min_y <= y and y <= max_y:
                key_points.remove(key_point)

    # Aggregate points
    points = key_points + landmarks

    # Add points for every corner
    height, width, channels = img.shape
    points.append((0, 0))
    points.append((0, height - 1))
    points.append((width - 1, 0))
    points.append((width - 1, height - 1))

    return points, face_bounds


def lambda_handler(event, context):
    """
    Called by AWS Lambda.
    """

    # print "Event:\n", json.dumps(event)
    # print "Context:\n", context

    # Consume S3 create event
    key = event['Records'][0]['s3']['object']['key']
    session_id, filename = key.split('/')

    # Download image
    s3 = boto3.resource('s3', region_name='us-east-1')
    bucket = s3.Bucket(BUCKET_NAME)

    ext = filename.split('.')[1]
    image_object = bucket.Object(key)
    # image_buffer = io.BytesIO(image_object.get()['Body'].read())
    img = cv2.imdecode(numpy.fromstring(image_object.get()['Body'].read(),
                                        numpy.uint8),
                       cv2.IMREAD_UNCHANGED)

    # Analyze image (https://docs.opencv.org/2.4/modules/imgproc/doc/feature_detection.html)
    # Much above 1000 takes too long for delaunay triangulation
    some_input_from_config_file = 1000
    max_points = min(some_input_from_config_file, 1000)
    points, face_bounds = identify_points(img, max_points)

    # Draw on img
    for point in points:
        center = point
        radius = 2
        color = (255, 0, 255)
        cv2.circle(img, center, radius, color, -1)
    for face_bound in face_bounds:
        color = (0, 255, 255)
        cv2.rectangle(img, face_bound[0], face_bound[1], color)

    # If testing locally write image to file system then exit
    if IS_LOCAL:
        cv2.imwrite('points.jpg', img)
        if not UPLOAD_ANYWAY:
            return

    # Upload image with drawing
    img = cv2.imencode('.jpg', img)[1].tostring()
    img_key = session_id + '/points.jpg'
    s3.Object(BUCKET_NAME, img_key).put(Body=img)

    # Upload key points as JSON to S3. Upload this second because this is the
    # trigger for the partition phase.
    data = json.dumps(points)
    points_key = session_id + '/points.json'
    s3.Object(BUCKET_NAME, points_key).put(Body=data)


if __name__ == "__main__":
    IS_LOCAL = True
    UPLOAD_ANYWAY = True
    uuid = 'face'
    event = {u'Records': [{u'eventVersion': u'2.0', u'eventTime': u'2018-03-11T14:50:46.631Z', u'requestParameters': {u'sourceIPAddress': u'98.163.206.197'}, u's3': {u'configurationId': u'367c003d-db1a-4a71-9e34-b47f90c71a86', u'object': {u'eTag': u'fa02ebd6d522c72806a428c309d13756', u'sequencer': u'005AA54246862A53B6', u'key': uuid + u'/start.jpg', u'size': 162446}, u'bucket': {u'arn': u'arn:aws:s3:::lowpoly',
                                                                                                                                                                                                                                                                                                                                                                                              u'name': u'lowpoly', u'ownerIdentity': {u'principalId': u'AX2FA51TPHMAJ'}}, u's3SchemaVersion': u'1.0'}, u'responseElements': {u'x-amz-id-2': u'xhK79IlgCRf1wX7Xh8imG7+xSbtZfl9AQJIPVkzUazYyetsFVKI2MSz4aC7q3moZSzZyvE4WYNM=', u'x-amz-request-id': u'F4A63ED2826C8B0D'}, u'awsRegion': u'us-east-1', u'eventName': u'ObjectCreated:Put', u'userIdentity': {u'principalId': u'AX2FA51TPHMAJ'}, u'eventSource': u'aws:s3'}]}
    lambda_handler(event, None)
