"""
Consume an S3 create event, download the file, run some analysis, return the
key points.
"""

import json

import cv2
import boto3
import botocore


BUCKET_NAME = 'lowpoly'


def lambda_handler(event, context):
    # print "Event:\n", json.dumps(event)
    # print "Context:\n", context

    # Connect to S3
    s3 = boto3.resource('s3')

    # Consume S3 create event
    key = event['Records'][0]['s3']['object']['key']
    session_id, filename = key.split('/')
    print key

    # Download image
    try:
        # TODO: Download image inmem
        s3.Bucket(BUCKET_NAME).download_file(key, filename)
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == '404':
            print 'The object does not exist.'
        else:
            print 'Some other error.'
            raise
        return

    # TODO: Analyze image (https://docs.opencv.org/2.4/modules/imgproc/doc/feature_detection.html)
    img = cv2.imread(filename)

    # Method: Canny and display

    # Canny edge detection
    # edges = cv2.Canny(img, 300, 500)
    # print len(edges[10])
    # from matplotlib import pyplot as plt
    # plt.subplot(121)
    # plt.imshow(img, cmap='gray')
    # plt.title('Original Image')
    # plt.xticks([])
    # plt.yticks([])
    # plt.subplot(122)
    # plt.imshow(edges, cmap='gray')
    # plt.title('Edge Image')
    # plt.xticks([])
    # plt.yticks([])
    # plt.show()

    # Method: Key points and save
    # img = cv2.imread(filename)
    # gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # sift = cv2.xfeatures2d.SIFT_create()
    # kp = sift.detect(gray, None)
    # img = cv2.drawKeypoints(gray, kp, img, flags=cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
    # cv2.imwrite('sift_keypoints.jpg', img)

    # Method: NxN grid
    N = 100
    height, width, channels = img.shape
    points = []
    for x in range(width):
        if x % N == 0:
            for y in range(height):
                if y % N == 0:
                    point = (x+N/3, y+N/4)
                    points.append(point)

    # Upload key points as JSON to S3
    data = json.dumps(points, indent=2)
    points_key = session_id + '/points.json'
    s3.Object(BUCKET_NAME, points_key).put(Body=data)

    # Draw on img
    for point in points:
        center = point
        radius = 10
        color = (255, 0, 255)
        cv2.circle(img, center, radius, color, -1)
    cv2.imwrite('out.jpg', img)

    # Upload image with drawing
    img_key = session_id + '/points.jpg'
    s3.Object(BUCKET_NAME, img_key).put(Body=open('out.jpg', 'rb'))

if __name__ == "__main__":
    event = {u'Records': [{u'eventVersion': u'2.0', u'eventTime': u'2018-03-11T14:50:46.631Z', u'requestParameters': {u'sourceIPAddress': u'98.163.206.197'}, u's3': {u'configurationId': u'367c003d-db1a-4a71-9e34-b47f90c71a86', u'object': {u'eTag': u'fa02ebd6d522c72806a428c309d13756', u'sequencer': u'005AA54246862A53B6', u'key': u'748205b7-c744-4be2-ae9a-5f49f34abf73/start.jpg', u'size': 162446}, u'bucket': {u'arn': u'arn:aws:s3:::lowpoly', u'name': u'lowpoly', u'ownerIdentity': {u'principalId': u'AX2FA51TPHMAJ'}}, u's3SchemaVersion': u'1.0'}, u'responseElements': {u'x-amz-id-2': u'xhK79IlgCRf1wX7Xh8imG7+xSbtZfl9AQJIPVkzUazYyetsFVKI2MSz4aC7q3moZSzZyvE4WYNM=', u'x-amz-request-id': u'F4A63ED2826C8B0D'}, u'awsRegion': u'us-east-1', u'eventName': u'ObjectCreated:Put', u'userIdentity': {u'principalId': u'AX2FA51TPHMAJ'}, u'eventSource': u'aws:s3'}]}
    lambda_handler(event, None)
