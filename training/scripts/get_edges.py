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

SHOW = True

model_name = sys.argv[1]


def canny(img, low_thresh, high_thresh):
    """
    Canny edge detection. `img` should be grayscale.
    """

    # Detect edges (really, the points that make up the edges)
    edges = cv2.Canny(img, low_thresh, high_thresh)
    if SHOW:
        cv2.imshow('Edges', edges)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # I am 99% positive all of the below is only related to extracting points

    # Next, we basically select a random subset of points in an odd way

    # # Number of points to keep of all detected points
    # if np.where(edges)[0].size > 1000:
    #     num_points = int(np.where(edges)[0].size * percent)
    # else:
    #     num_points = np.where(edges)[0].size

    # # Get the indices of non-zero edge points
    # row_indices, col_indices = np.nonzero(edges)

    # # This is a weird way of getting a Numpy array that looks
    # # like [False, False, ..., False] where length is `row_indices.shape[0]`.
    # rnd = np.zeros(row_indices.shape) == 1

    # # Mark indices from beginning to 'num_points - 1' as True. This is not
    # # all items in `rnd`.
    # rnd[:num_points] = True
    # # Shuffle, so that the `True` values are distributed
    # np.random.shuffle(rnd)

    # # Randomly select a subset of the points to use. The ordered pairs are
    # # being maintained because we are getting `rnd` from both lists. The result
    # # is still a list of indices since `rnd` is a list of booleans.
    # row_indices = row_indices[rnd]
    # col_indices = col_indices[rnd]

    # # Co-ordinates of all randomly chosen points
    # pts = np.vstack([row_indices, col_indices]).T

    # # Turn into python list, tuples, and ints
    # points = []
    # for p in pts:
    #     point = (int(p[1]), int(p[0]))
    #     points.append(point)

    # return points


def main():
    path = './%s/images/' % model_name
    for filename in os.listdir(path):
        # TODO: Load img
        # TODO: Canny edge detection on img

        # Output the image
        image_id = filename.split('.')[0]
        image_id = image_id.split('mountain')[1]  # TODO: Use model_name
        out_filepath = path + image_id
        # TODO: Save image


main()
