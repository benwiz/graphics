#!/bin/bash
#
# Sort images into three sets: train, test, val.

echo
echo "sort_data.sh:"
echo "Begin sorting data into train, test, and validation sets."

MODEL_NAME=$1

# First, we prune the data by removing images that have no associated edge
