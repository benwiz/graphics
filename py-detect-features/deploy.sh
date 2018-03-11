#!/bin/bash

# HOW TO: Run from this directory using `./deploy.sh`

# Remove old zip
rm py-detect-features.zip

# Move libs to root
mv libs/cv2 .
mv libs/numpy .
mv libs/matplotlib .
mv libs/Pillow-5.0.0.dist-info .

# Create zip artifact
zip -r9 py-detect-features.zip * -x *.zip -x deploy.sh

# Put libs back
mv cv2 libs/
mv numpy libs/
mv matplotlib libs/
mv Pillow-5.0.0.dist-info libs/

# Upload zip to S3
aws s3 cp py-detect-features.zip s3://lowpoly/py-detect-features.zip --profile personal

# Update lambda function code by pointing to S3 artifact
aws lambda update-function-code --function-name lowpoly-py-detect-features --s3-bucket lowpoly --s3-key py-detect-features.zip --profile personal
