#!/bin/bash

mv linux-libs/cv2 .
mv linux-libs/numpy .
zip -r9 py-detect-features.zip * -x *.zip -x deploy.sh -x *linux-libs/*
mv cv2 linux-libs/
mv numpy linux-libs/
# aws lambda update-function-code --function-name lowpoly-py-detect-features --zip-file fileb://$(pwd)/py-detect-features.zip --profile personal
aws s3 cp py-detect-features.zip s3://lowpoly/py-detect-features.py --profile personal
