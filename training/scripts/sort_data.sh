#!/bin/bash
#
# Sort images into three sets: train, test, val.

echo
echo "sort_data.sh:"
echo "Begin sorting data into train, test, and validation sets."

if [ -z "$1" ]
then
    echo "No argument supplied"
fi

# Configs for distribution. Must sum to 1.0.
TRAIN_PERCENT=0.8
TEST_PERCENT=0.1
VAL_PERCENT=0.1

# Read model name argument
MODEL_NAME=$1

# Ensure destination directories exist and are empty
mkdir -p ./$MODEL_NAME/train
mkdir -p ./$MODEL_NAME/test
mkdir -p ./$MODEL_NAME/val

rm -f ./$MODEL_NAME/train/*
rm -f ./$MODEL_NAME/test/*
rm -f ./$MODEL_NAME/val/*

# Calculate total target counts for buckets
# TODO: Figure out how to use float here
TOTAL_COUNT=$(ls ./$MODEL_NAME/data/ | wc -l) 
# TRAIN_COUNT_TARGET=$((TRAIN_PERCENT * TOTAL_COUNT))
# TEST_COUNT_TARGET=$((TEST_PERCENT * TOTAL_COUNT))
# VAL_COUT_TARGET=$((TOTAL_COUNT - TRAIN_COUNT_TARGET - TEST_COUNT_TARGET))
# For now, hard code
TRAIN_COUNT_TARET=1
TEST_COUNT_TARGET=1
VAL_COUNT_TARGET=1

# Initialize counter for each bucket
COUNT=0
TRAIN_COUNT=1
TEST_COUNT=2
VAL_COUNT=1

# Loop through the training data and move file to appriate directory
for f in ./$MODEL_NAME/data/*.jpg;
do
    if [ $COUNT -lt $TRAIN_COUNT ]
    then
        # Move image to `train`
        mv $f ./$MODEL_NAME/train/
    elif [ $COUNT -lt $((TRAIN_COUNT + TEST_COUNT)) ]
    then
        # Move image to `test
        mv $f ./$MODEL_NAME/test/
    else
        # Move image to `val`
        mv $f ./$MODEL_NAME/val/
    fi

    COUNT=$((COUNT + 1))
done
