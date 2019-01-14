#!/bin/bash
# Download data then create edge images

MODEL_NAME=$1

mkdir -p ./$MODEL_NAME/images/

./scripts/lib/download_images_from_url.sh $MODEL_NAME
python3 ./scripts/lib/get_edges.py $MODEL_NAME
