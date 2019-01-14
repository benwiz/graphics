# INPUT:
# ./scripts/download_images_from_url.sh ./edges2mountains/urls.txt ./edges2mountains/images/ 250 250
# TODO: revisit this example input
#
# OUTPUT:
# ./edges2/mountains/images/mountain_N.png of 250x250 pixels
# TODO: revisit this example output

MODEL_NAME=$1
TOTAL_COUNT=$(echo $(wc -l < "$MODEL_NAME/urls.txt")) 

echo; echo "Downloading images $TOTAL_COUNT from $MODEL_NAME"

while read p; do
    COUNT=$(echo $(ls $MODEL_NAME/images/ | wc -l))
    wget -O "$MODEL_NAME/images/deleteme$MODEL_NAME$COUNT.jpg" "$p" --tries 2 --timeout 5 &> /dev/null

    PERCENT=$(echo "scale=4 ; $COUNT / $TOTAL_COUNT * 100" | bc)
    echo -ne "\t$COUNT / $TOTAL_COUNT ($PERCENT%)\r"
done <$MODEL_NAME/urls.txt

echo
