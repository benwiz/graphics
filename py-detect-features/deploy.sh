#!/bin/bash

# HOW TO: Run from this directory using `./deploy.sh`

rm py-detect-features.zip
mv linux-libs/cv2 .
mv linux-libs/numpy .
zip -r9 py-detect-features.zip * -x *.zip -x deploy.sh
mv cv2 linux-libs/
mv numpy linux-libs/
aws s3 cp py-detect-features.zip s3://lowpoly/py-detect-features.zip --profile personal
aws lambda update-function-code --function-name lowpoly-py-detect-features --s3-bucket lowpoly --s3-key py-detect-features.zip --profile personal
