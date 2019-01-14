#!/bin/bash
#
# Initialize the training sequence.

echo
echo "train.sh:"
echo "Begin training the model."

# Read model argument
MODEL_NAME=$1

# Read dry run flag
IS_DRY_RUN=0
if [ "$2" == "--dry-run" ] # TODO: Figure out the proper way for checking boolean flags
then
    IS_DRY_RUN=1
fi
