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
        img = cv2.imread(in_filepath, cv2.IMREAD_COLOR)
        if img is None:
            continue
        # print('\tin:\t%s' % in_filepath)

        # Resize image to 256x256
        size = 256
        img = cv2.resize(img, (size, size))

        # Convert it to grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Canny edge detection on gray image
        edges = cv2.Canny(gray, 100, 450)

        # Invert black and white
        edges = cv2.bitwise_not(edges)

        # Stich the two photos together with the edges on the right. But first
        # we need to convert the edges image to color.
        edges = cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR)
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
