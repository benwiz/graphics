"""
Consume an S3 create event, download the file, run some analysis, return the
key points.

NOTE: Could probably use Numpy arrays rather than lists and tuples for a slight
speed increase.
"""

import os
import io
import json
import random
import pdb
import math

import boto3
import cv2
import numpy as np
# import dlib

BUCKET_NAME = 'lowpoly'
IS_LOCAL = False
UPLOAD_ANYWAY = False
SHOW = False

predictor_path = os.path.join(
    os.path.dirname(__file__),
    'shape_predictor_68_face_landmarks.dat'
)


def distance(p0, p1):
    """
    Calculate the distance between two points.
    """
    return math.sqrt((p0[0] - p1[0])**2 + (p0[1] - p1[1])**2)


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


def identify_points_by_canny_edge_detection(img, low_thresh, high_thresh, percent):
    """
    Method: canny edge detection. `img` should be grayscale.
    """

    edges = cv2.Canny(img, low_thresh, high_thresh)
    if SHOW:
        cv2.imshow('Edges', edges)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # Number of points to keep of all detected points
    num_points = int(np.where(edges)[0].size * percent)

    # Get the indices of non-zero edge points
    row_indices, col_indices = np.nonzero(edges)

    # This is a weird way of getting a Numpy array that looks
    # like [False, False, ..., False] where length is `row_indices.shape[0]`.
    rnd = np.zeros(row_indices.shape) == 1

    # Mark indices from beginning to 'num_points - 1' as True. This is not
    # all items in `rnd`.
    rnd[:num_points] = True
    # Shuffle, so that the `True` values are distributed
    np.random.shuffle(rnd)

    # Randomly select a subset of the points to use. The ordered pairs are
    # being maintained because we are getting `rnd` from both lists. The result
    # is still a list of indices since `rnd` is a list of booleans.
    row_indices = row_indices[rnd]
    col_indices = col_indices[rnd]

    # Co-ordinates of all randomly chosen points
    pts = np.vstack([row_indices, col_indices]).T

    # Turn into python list, tuples, and ints
    points = []
    for p in pts:
        point = (int(p[1]), int(p[0]))
        points.append(point)

    return points


def identify_facial_landmarks(img):
    """
    Use dlib to identify facial landmarks.
    """

    points = []
    face_bounds = []  # Calculate face bounds from landmarks, not face detector

    # TODO: Uncomment all this for a working DLib

    # detector = dlib.get_frontal_face_detector()
    # predictor = dlib.shape_predictor(predictor_path)

    # faces = detector(img, 1)
    # for face in faces:
    #     shape = predictor(img, face)
    #     landmarks = []
    #     for i in range(shape.num_parts):
    #         part = shape.part(i)
    #         x = int(part.x)
    #         y = int(part.y)
    #         landmark = (x, y)
    #         landmarks.append(landmark)
    #     points += landmarks

    #     # https://www.pyimagesearch.com/wp-content/uploads/2017/04/facial_landmarks_68markup-768x619.jpg
    #     max_x = max(landmarks, key=lambda point: point[0])[0]
    #     max_y = max(landmarks, key=lambda point: point[1])[1]
    #     min_x = min(landmarks, key=lambda point: point[0])[0]
    #     min_y = min(landmarks, key=lambda point: point[1])[1]
    #     upper_left = (min_x, min_y)
    #     bottom_right = (max_x, max_y)
    #     face_bound = [upper_left, bottom_right]
    #     face_bounds.append(face_bound)

    return points, face_bounds


def identify_filler_points(img, current_points, percent=0.10):
    """
    For now we generate 10% len(current_points) randomly. Later, we
    intelligently choose where we need more points.
    """

    height, width, _ = img.shape

    num_points = int(percent * len(current_points))
    points = []
    for i in range(num_points):
        x = random.randint(0, width - 1)
        y = random.randint(0, height - 1)
        point = (x, y)
        points.append(point)

    return points


def preprocess_img(img):
    """
    Process the image to prepare it for computer vision. This entails handling
    single-channel images as well as sharpening color images in grayscale.
    """

    # Make single-channel image into three-channel image
    if img.shape[2] == 1:
        img = img.dstack([img, img, img])
        # TODO: Not sure this actually works, for now may just want to abort

    # # Resize image. This helps detect fewer
    # # NOTE: This requires re-sizing the points later back to initial size.
    # newSize = 750
    # if newSize < np.max(img.cshape[:2]):
    #     scale = newSize / float(np.max(img.shape[:2]))
    #     img = cv2.resize(img, (0, 0), fx=scale, fy=scale,
    #                      interpolation=cv2.INTER_AREA)

    # Reduce noise
    noiseless_img = cv2.fastNlMeansDenoisingColored(img, None, 10, 10, 7, 21)

    # Create a grayscale image
    gray_img = cv2.cvtColor(noiseless_img, cv2.COLOR_BGR2GRAY)

    # # Consider normalizing the gray_img, it does make a visible change
    # clahe = cv2.createCLAHE()
    # normalized_gray_img = clahe.apply(gray_img)
    # # Display a window to compare normalized gray image
    # if SHOW:
    #     compare = np.hstack([gray_img, normalized_gray_img])
    #     cv2.imshow('gray images', compare)
    #     cv2.waitKey(0)
    #     cv2.destroyAllWindows()

    # Use YCbCr color model then grab first channel. Needed for thresholds.
    ycbcr_img = cv2.cvtColor(noiseless_img, cv2.COLOR_RGB2YCrCb)
    for x in range(ycbcr_img.shape[0]):
        for y in range(ycbcr_img.shape[1]):
            ycbcr_img[x][y] = ycbcr_img[x][y][0]
    ycbcr_img = ycbcr_img[:, :, 0]
    if SHOW:
        # compare = np.hstack([gray_img, ycbcr_img])
        cv2.imshow('YCbCr', ycbcr_img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # Calculate thresholds
    high_thresh, thresh_img = cv2.threshold(
        ycbcr_img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    low_thresh = 0.5 * high_thresh
    if SHOW:
        cv2.imshow('Otsu\'s Threshold Image', thresh_img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # Sharpen a blurred image. This helps define the edges.
    blurred_gray_img = cv2.GaussianBlur(gray_img, (0, 0), 3)
    sharp_gray_img = cv2.addWeighted(gray_img, 2.5, blurred_gray_img, -1, 0)
    if SHOW:
        # compare = np.hstack([blurred_gray_img, sharp_gray_img])
        cv2.imshow('Sharp gray image', sharp_gray_img)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    return img, sharp_gray_img, low_thresh, high_thresh


def identify_points(img, gray_img, options):
    """
    Use a method to identify points
    """

    grid_points = []
    key_points = []
    facial_landmarks = []
    face_bouds = []
    edges = []

    if options['grid_points']:
        grid_points = identify_points_by_grid(img, 25)
    if options['key_points']:
        key_points = identify_points_by_key_points(img, 1000)
    if options['facial_landmarks']:
        facial_landmarks, face_bounds = identify_facial_landmarks(img)
    if options['canny']:
        canny_edges = identify_points_by_canny_edge_detection(
            gray_img, options['low_thresh'],
            options['high_thresh'],
            options['canny_percent'])

    # Aggregate points
    points = grid_points + key_points + canny_edges

    # TODO: Optionally add noise to canny/all points and move them a little bit

    # Generate points to fill in gaps
    if options['random']:
        random_points = identify_filler_points(img, points, 0.10)
        points += random_points

    # Iterate through points, remove all points within the given radius
    indices_to_delete = set()
    for i in range(len(points)):
        # Compare this point to all other points
        p0 = points[i]
        for j in range(len(points)):
            if i == j:
                continue
            p1 = points[j]
            if distance(p0, p1) < options['radius']:
                indices_to_delete.add(j)
    for index in sorted(indices_to_delete, reverse=True):
        del points[index]

    # Remove any points within any face_bound
    for point in points:
        for face_bound in face_bounds:
            x = point[0]
            y = point[1]
            min_x = face_bound[0][0]
            min_y = face_bound[0][1]
            max_x = face_bound[1][0]
            max_y = face_bound[1][1]
            if min_x <= x and x <= max_x and min_y <= y and y <= max_y:
                points.remove(point)

    # Add facial landmarks to aggregate
    points += facial_landmarks

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
    # print "Context:\n", conpertext

    # Consume S3 create event
    key = event['Records'][0]['s3']['object']['key']
    session_id, filename = key.split('/')

    # Download image
    s3 = boto3.resource('s3', region_name='us-east-1')
    bucket = s3.Bucket(BUCKET_NAME)

    ext = filename.split('.')[1]
    image_object = bucket.Object(key)
    # image_buffer = io.BytesIO(image_object.get()['Body'].read())
    img = cv2.imdecode(np.fromstring(image_object.get()['Body'].read(),
                                     np.uint8),
                       cv2.IMREAD_UNCHANGED)

    # Analyze image
    img, sharp_gray_img, low_thresh, high_thresh = preprocess_img(img)
    options = {
        'grid_points': False,
        'key_points': False,
        'facial_landmarks': True,  # Code is commented out in the function
        'canny': True,
        'random': True,
        'low_thresh': low_thresh,
        'high_thresh': high_thresh,
        'canny_percent': 0.05,
        'radius': 5,
    }
    points, face_bounds = identify_points(img, sharp_gray_img, options)

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
    event['Records'][0]['s3']['object']['key'] = '1/start.jpg'
    lambda_handler(event, None)
