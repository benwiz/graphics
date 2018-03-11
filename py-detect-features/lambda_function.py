import cv2
import json


def lambda_handler(event, context):
    print "OpenCV installed version:", cv2.__version__
    print "Event:\n", json.dumps(event)
    print "Context:\n", context
    return "It works!"

if __name__ == "__main__":
    lambda_handler(42, 42)
