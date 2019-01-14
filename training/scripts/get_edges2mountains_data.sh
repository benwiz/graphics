# TODO: Orchestrate the various python scripts

MODEL_NAME=edges2mountains

mkdir -p ./$1/images/

./scripts/download_images_from_url.sh $MODEL_NAME
python3 ./scripts/get_edges.py
