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

SHOW = False

model_name = sys.argv[1]


def canny(img, low_thresh, high_thresh):
    """
    Canny edge detection. `img` should be grayscale.
    """

    # Detect edges (points that identify the edges)
    edges = cv2.Canny(img, low_thresh, high_thresh)
    if SHOW:
        cv2.imshow('Edges', edges)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
    
    return edges


def main():
    path = './%s/images/' % model_name
    for filename in os.listdir(path):
        # TODO: Load img
        in_filepath = path + filename
        img = cv2.imread(in_filepath, cv2.IMREAD_GRAYSCALE)
        if img is None:
            continue

        # Canny edge detection on img
        edges = canny(img, 100, 500)

        # Output the image
        image_id = filename.split('.')[0]
        image_id = image_id.split('mountain')[1]  # TODO: No prefix `mountain`
        out_filepath = '%s%s%s%s%s' % (path, 'mountain', image_id, '_edge', '.jpg')
        cv2.imwrite(out_filepath, edges)

        # Ensure all windows are closed
        if SHOW:
            cv2.destroyAllWindows()


main()
