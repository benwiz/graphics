#!/bin/bash

# HOW TO: Run from this directory using `./deploy.sh`

# Move libs
mv libs/cv2 .
mv libs/numpy .
mv libs/numpy-1.15.4.dist-info .
mv libs/opencv_contrib_python-3.4.0.12.dist-info .
mv libs/dlib-19.15.0.egg-info .
mv libs/dlib.so .

# Remove old zip
rm py-detect-features.zip

# Create zip artifact
zip -r9 py-detect-features.zip * -x *.zip -x deploy.sh

# Replace libs
mv cv2 libs/
mv numpy libs/
mv numpy-1.15.4.dist-info libs/
mv opencv_contrib_python-3.4.0.12.dist-info libs/
mv dlib-19.15.0.egg-info libs/
mv dlib.so libs/

# Upload zip to S3
aws s3 cp py-detect-features.zip s3://lowpoly/py-detect-features.zip

# Update lambda function code by pointing to S3 artifact
aws lambda update-function-code --function-name lowpoly-py-detect-features --s3-bucket lowpoly --s3-key py-detect-features.zip
