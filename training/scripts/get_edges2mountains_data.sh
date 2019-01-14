# TODO: Orchestrate the various python scripts

MODEL_NAME=edges2mountains # $1

mkdir -p ./$MODEL_NAME/images/

./scripts/download_images_from_url.sh $MODEL_NAME
python3 ./scripts/get_edges.py
