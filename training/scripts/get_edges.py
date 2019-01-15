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

if len(sys.argv) != 2:
    print('Error: exactly 1 argument must be supplied.')
    sys.exit(1)

MODEL_NAME = sys.argv[1]


def run():
    """
    Run everything.
    """

    path = './%s/images/' % MODEL_NAME
    for filename in os.listdir(path):
        # Load image
        in_filepath = path + filename
        img = cv2.imread(in_filepath, cv2.IMREAD_GRAYSCALE)
        if img is None:
            continue
        # print('\tin:\t%s' % in_filepath)

        # Resize image to 256x256
        size = 256
        img = cv2.resize(img, (size, size))

        # Canny edge detection on img
        edges = cv2.Canny(img, 100, 500)

        # TODO: Stich the two photos together with the edges on the right
        out = np.concatenate((img, edges), axis=1)

        # Output the image
        out_path = './%s/data/' % MODEL_NAME
        image_id = filename.split('.')[0]
        out_filepath = out_path + image_id + '.jpg'
        cv2.imwrite(out_filepath, out)
        # print('\tout:\t%s' % out_filepath)


if __name__ == '__main__':
    print()
    print('get_edges.py:')
    print('Begin edge detection.')
    run()
    print('Complete edge detection.')
