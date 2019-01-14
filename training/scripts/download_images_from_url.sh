# INPUT:
# ./scripts/download_images_from_url.sh ./edges2mountains/urls.txt ./edges2mountains/images/ 250 250
#
# OUTPUT:
# ./edges2/mountains/images/mountain_N.png of 250x250 pixels

MODEL_NAME=$1

echo; echo "Downloading images from $MODEL_NAME"; echo

while read p; do
    echo;echo;echo
    echo "$MODEL_NAME/images/mountain$(echo $(ls $MODEL_NAME/images/ | wc -l)).jpg"
    echo;echo;echo
    wget -O "$MODEL_NAME/images/mountain$(echo $(ls $MODEL_NAME/images/ | wc -l)).jpg" "$p"
done <$MODEL_NAME/urls.txt
