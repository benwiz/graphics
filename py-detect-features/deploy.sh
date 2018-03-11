#!/bin/bash

cp -r linux-libs/cv2 .
cp -r linux-libs/numpy .
zip -r9 py-detect-features.zip * -x *.zip
rm -r cv2
rm -r numpy
aws lambda update-function-code --function-name lowpoly-py-detect-features --zip-file fileb://$(pwd)/py-detect-features.zip
