"""
INPUT:

python3 ./scripts/get_edges.py edges2mountains

OUTPUT:

./edges2mountains/images/edgeN.png
"""

# https://github.com/benwiz/fragment/blob/master/py-detect-features/lambda_function.py

import sys
import os
import numpy as np
import cv2

model_name = sys.argv[1]


def run():
    path = './%s/images/' % model_name
    for filename in os.listdir(path):
        # Load image
        in_filepath = path + filename
        img = cv2.imread(in_filepath, cv2.IMREAD_GRAYSCALE)
        if img is None:
            continue
        print('\tin:\t%s' % in_filepath)

        # TODO: Resize image to 256x256

        # Canny edge detection on img
        edges = cv2.Canny(img, 100, 500)

        # TODO: Stich the two photos together with the edges on the right

        # Output the image
        out_path = './%s/data/' % model_name
        image_id = filename.split('.')[0]
        out_filepath = out_path + image_id + '.jpg'
        cv2.imwrite(out_filepath, edges)
        print('\tout:\t%s' % out_filepath)


if __name__ == '__main__':
    print()
    print('get_edges.py:')
    print('Begin edge detection.')
    run()
