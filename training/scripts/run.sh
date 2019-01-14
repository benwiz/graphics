#!/bin/bash
#
# Get and prepare data. Then begin training the Tensorflow pix2pix model.
# ./scripts/run.sh edges2mountains --dry-run
#

echo
echo "run.sh:" # TODO: Figure out how to make this bold or underlined
echo "Begin program."

# Read model argument
MODEL_NAME=$1

# Read dry run flag
IS_DRY_RUN=0
if [ "$2" == "--dry-run" ] # TODO: Figure out the proper way for checking boolean flags
then
    IS_DRY_RUN=1
fi

# Notice that the script is starting
if [ "$IS_DRY_RUN" -eq "1" ]
then
    echo "This program will run as a \"DRY RUN\" mode meaning that only 5 images will be downloaded and used to train the model. This program should complete within a couple minutes."
else
    echo "This program will run in PRODUCTION mode meaning that all available images will be downloaded and used to train the model. This program should complete within several hours."
fi

#
# Get and prepare data
#
if [ "$IS_DRY_RUN" -eq "1" ]
then
    ./scripts/get_data.sh $MODEL_NAME --dry-run
else
    ./scripts/get_data.sh $MODEL_NAME
fi

#
# Train the model
#
./scripts/train.sh $MODEL_NAME

echo
echo "Done."
