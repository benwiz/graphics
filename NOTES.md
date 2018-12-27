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

- Find/create shapes
- Draw shapes

- Rename `point` to `vertex`
- Rename `line` to `edge`

- Provide a function that returns an object with all default options
- Make it configurable
- Make it pretty

- Storing results in adj list will require updates throughout the code. But having those updates will be valuable before starting the C version of this project. But using an adj. list does _not_ necessarily mean I should get rid of the points list or edges list. I probably should have a graph class or a graph interface.
  - https://www.geeksforgeeks.org/implementation-graph-javascript/

- Finding lines can be optimized.

- Later
  - Mouse effects on points

- Bug
  - tslint.json not listening to "no-magic-numbers" or "max-length" properly
