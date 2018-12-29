# A README for development

## How to deploy to NPM

Patch

```sh
npm version patch
```

Deploy

```sh
npm publish --access public
```

## To Do

- Document the `stop()` function
- Port to C and create a wasm module. Visit the [repo](https://github.com/benwiz/boba.wasm).

- Later
  - Contribution section of README
  - Mouse effects on vertices
  - Finding edges can be optimized a lot
  - Finding triangles can be optimized a little, probably
  - Use more traditional graph organization like an adjacency list
    - Storing results in adj list will require updates throughout the code. But having those updates will be valuable before starting the C version of this project. But using an adj. list does _not_ necessarily mean I should get rid of the vertices list or edges list. I probably should have a graph class or a graph interface.
    - https://www.geeksforgeeks.org/implementation-graph-javascript/
    - I had a lot of trouble finding 3-cycles and N-cycles using adjacency lists on my first attempt

- Bug
  - tslint.json not listening to "no-magic-numbers" or "max-length" properly
