#!/bin/bash

# INPUT:
# ./scripts/download_images_from_url.sh ./edges2mountains/urls.txt ./edges2mountains/images/ 250 250
# TODO: revisit this example input
#
# OUTPUT:
# ./edges2/mountains/images/mountain_N.png of 250x250 pixels
# TODO: revisit this example output

echo
echo "download_images_from_url.sh:"

# Read model argument
MODEL_NAME=$1

# Read dry run flag
IS_DRY_RUN=0
if [ "$2" == "--dry-run" ] # TODO: Figure out the proper way for checking boolean flags
then
    IS_DRY_RUN=1
fi

# Calculate total number of images
if [ "$IS_DRY_RUN" -eq "1" ]
then
    TOTAL_COUNT=10
else
    TOTAL_COUNT=$(echo $(wc -l < "$MODEL_NAME/urls.txt")) 
fi

# Clear existing images
rm $MODEL_NAME/images/*

echo "Downloading $TOTAL_COUNT images for $MODEL_NAME"

while read p; do
    # Downoad image
    COUNT=$(echo $(ls $MODEL_NAME/images/ | wc -l))
    wget -O "$MODEL_NAME/images/$COUNT.jpg" "$p" --tries 2 --timeout 5 &> /dev/null

    # Update progress
    PERCENT=$(echo "scale=4 ; $COUNT / $TOTAL_COUNT * 100" | bc)
    echo -ne "\t$COUNT / $TOTAL_COUNT ($PERCENT%)\r"

    # Exit loop if total count has been reached
    if [ "$COUNT" -ge "$TOTAL_COUNT" ]
    then
        break;
    fi
done <$MODEL_NAME/urls.txt
echo
