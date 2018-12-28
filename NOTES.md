# A README for my own notes during development that I don't want to pubish to NPM

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

- Add more configs
  - Dot size
  - Color(s)
    - Maybe allow a color palette
- Make it pretty

- Finding edges can be optimized.

- Later
  - Mouse effects on vertices
  - Storing results in adj list will require updates throughout the code. But having those updates will be valuable before starting the C version of this project. But using an adj. list does _not_ necessarily mean I should get rid of the vertices list or edges list. I probably should have a graph class or a graph interface.
    - https://www.geeksforgeeks.org/implementation-graph-javascript/
    - I had a lot of trouble finding 3-cycles and N-cycles using adjacency lists on my first attempt

- Bug
  - tslint.json not listening to "no-magic-numbers" or "max-length" properly
