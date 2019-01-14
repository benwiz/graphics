#!/bin/bash
#
# Download data then create edge images
#

echo
echo "get_data.sh:"
echo "Begin getting and preparing training data."

# Read model argument
MODEL_NAME=$1

# Read dry run flag
IS_DRY_RUN=0
if [ "$2" == "--dry-run" ] # TODO: Figure out the proper way for checking boolean flags
then
    IS_DRY_RUN=1
fi

mkdir -p ./$MODEL_NAME/images/

# # Download images
# if [ "$IS_DRY_RUN" -eq "1" ]
# then
#     ./scripts/lib/download_images_from_url.sh $MODEL_NAME --dry-run
# else
#     ./scripts/lib/download_images_from_url.sh $MODEL_NAME
# fi

# Get edges
mkdir -p ./$MODEL_NAME/data/
python3 ./scripts/lib/get_edges.py $MODEL_NAME

# # Sort data
# ./scripts/lib/sort_data.sh

# TODO: Sort the data into train, test, and validation sets
