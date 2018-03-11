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
        s3.Bucket(BUCKET_NAME).download_file(key, filename)
    except botocore.exceptions.ClientError as e:
        if e.response['Error']['Code'] == '404':
            print 'The object does not exist.'
        else:
            print 'Some other error.'
            raise
        return

    # TODO: Analyze image

    # TODO: Extract key points
    points = [
        [20, 20],
        [40, 40],
        [100, 100],
        [200, 200],
        [250, 250],
        [1000, 1000],
    ]

    # Upload key points as JSON to S3
    data = json.dumps(points, indent=2)
    points_key = session_id + '/points.json'
    s3.Object(BUCKET_NAME, points_key).put(Body=data)

if __name__ == "__main__":
    event = {u'Records': [{u'eventVersion': u'2.0', u'eventTime': u'2018-03-11T14:50:46.631Z', u'requestParameters': {u'sourceIPAddress': u'98.163.206.197'}, u's3': {u'configurationId': u'367c003d-db1a-4a71-9e34-b47f90c71a86', u'object': {u'eTag': u'fa02ebd6d522c72806a428c309d13756', u'sequencer': u'005AA54246862A53B6', u'key': u'748205b7-c744-4be2-ae9a-5f49f34abf73/start.jpg', u'size': 162446}, u'bucket': {u'arn': u'arn:aws:s3:::lowpoly', u'name': u'lowpoly', u'ownerIdentity': {u'principalId': u'AX2FA51TPHMAJ'}}, u's3SchemaVersion': u'1.0'}, u'responseElements': {u'x-amz-id-2': u'xhK79IlgCRf1wX7Xh8imG7+xSbtZfl9AQJIPVkzUazYyetsFVKI2MSz4aC7q3moZSzZyvE4WYNM=', u'x-amz-request-id': u'F4A63ED2826C8B0D'}, u'awsRegion': u'us-east-1', u'eventName': u'ObjectCreated:Put', u'userIdentity': {u'principalId': u'AX2FA51TPHMAJ'}, u'eventSource': u'aws:s3'}]}
    lambda_handler(event, None)
