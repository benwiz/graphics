#!/bin/bash

MODEL_NAME=$1
IS_DRY_RUN=0

if [ "$2" == "--dry-run" ] # TODO: Figure out the proper way for checking boolean flags
then
    IS_DRY_RUN=1
fi
if [ "$IS_DRY_RUN" -eq "1" ]
then
    echo
    echo "run.sh:"
    echo "This program will run as a \"DRY RUN\" meaning that only 5 images will be downloaded and used to train the model."
    echo
fi
