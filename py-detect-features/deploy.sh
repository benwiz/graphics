#!/bin/bash

zip -r9 py-detect-features.zip * -x *.zip
aws lambda update-function-code --function-name lowpoly-py-detect-features --zip-file fileb://$(pwd)/py-detect-features.zip
