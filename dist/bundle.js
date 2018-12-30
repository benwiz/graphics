var Boba =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Setup = __webpack_require__(1);
const Draw = __webpack_require__(3);
const Update = __webpack_require__(4);
// Global variables a necessary evil for the game loop. There is probably another way.
let CTX;
let VERTICES;
let EDGES;
let SHAPES;
let LAST_RENDER;
let OPTIONS;
const loop = (timestamp) => {
    const progress = timestamp - LAST_RENDER;
    const result = Update.update(progress, CTX, OPTIONS, VERTICES, EDGES, SHAPES);
    VERTICES = result.vertices;
    EDGES = result.edges;
    SHAPES = result.shapes;
    Draw.draw(CTX, OPTIONS, VERTICES, EDGES, SHAPES);
    LAST_RENDER = timestamp;
    window.requestAnimationFrame(loop);
};
const constrainOptions = (options) => {
    if (options.edgeColors.length > 1) {
        console.log('Boba.js: `edgeColors` currently only supports one color. Keeping only the first color.');
    }
    if (options.shapeColors.length > 1) {
        console.log('Boba.js: `shapeColors` currently only supports one color. Keeping only the first color.');
    }
    return options;
};
exports.start = (options) => {
    // Handle option constraings
    options = constrainOptions(options);
    // Make options available globally
    OPTIONS = options;
    // Create canvas and get context if the context is not already set (meaning the canvas already
    // exists). The reason we do this is to allow `start` to be called to override the setup with
    // new options. It's not the most elegant workflow but it is simple and it works well enough,
    // for now.
    const x = options.x;
    const y = options.y;
    const width = options.width;
    const height = options.height;
    const canvas = Setup.createCanvas(x, y, width, height);
    const ctx = canvas.getContext('2d');
    // Check that context was found, if not exit with an error. TODO: Make this proper.
    if (ctx === null) {
        throw new Error('Oh no! `ctx` is null!');
    }
    // Now that we know `ctx` exists, assign it globally
    CTX = ctx;
    // Initialize data in three step
    // 1. Create vertices
    VERTICES = Setup.createVertices(options);
    // 2. Initialize edges list as an empty array
    EDGES = [];
    // Initialize shapes list as an empty array, I think
    SHAPES = [];
    // Game loop
    LAST_RENDER = 0;
    window.requestAnimationFrame(loop);
};
exports.stop = () => {
    // Remove the canvas from the DOM
    CTX.canvas.remove();
    // Reset all global variables (except CTX because it can't be undefined), probably not necessary
    VERTICES = [];
    EDGES = [];
    SHAPES = [];
    LAST_RENDER = 0;
    OPTIONS = exports.getDefaultOptions();
};
exports.getDefaultOptions = () => {
    const options = {
        // Location and size of canvas
        x: 0,
        y: 0,
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        // Vertices configurations
        numVertices: 30,
        drawVertices: true,
        vertexMinSize: 8,
        vertexMaxSize: 16,
        vertexMinSpeed: 0.5,
        vertexMaxSpeed: 2,
        vertexColors: [
            {
                r: 30,
                g: 144,
                b: 255,
                a: 0.1,
            },
        ],
        // Edges configurations
        numNeighbors: 2,
        drawEdges: true,
        edgeColors: [
            {
                r: 30,
                g: 144,
                b: 255,
                a: 0.1,
            },
        ],
        // Shapes configurations
        drawShapes: true,
        shapeColors: [
            {
                r: 30,
                g: 144,
                b: 255,
                a: 0.05,
            },
        ],
    };
    return options;
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util = __webpack_require__(2);
exports.createCanvas = (x, y, width, height) => {
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    // Set css-based location
    canvas.style.position = 'absolute';
    canvas.style.left = String(x);
    canvas.style.top = String(y);
    canvas.style.zIndex = '-1';
    // Append canvas to dom and return canvas
    document.body.appendChild(canvas);
    return canvas;
};
exports.createVertices = (options) => {
    const vertices = [];
    for (let i = 0; i < options.numVertices; i++) {
        // TODO: Many of these configs will need to be abstractd to be configurable, and maybe into
        // lists rather than just single values
        const vertex = {
            id: i,
            x: Util.getRandomInt(0, options.width - 1),
            y: Util.getRandomInt(0, options.height - 1),
            speed: Util.getRandomFloat(0.5, 2),
            angle: Util.getRandomFloat(0, 360),
            runAwayMultiplier: 1,
            radius: Util.getRandomFloat(8, 16),
            color: options.vertexColors[Util.getRandomInt(0, options.vertexColors.length)],
        };
        vertices.push(vertex);
    }
    return vertices;
};
//# sourceMappingURL=setup.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomFloat = (min, max) => Math.random() * (max - min) + min;
exports.getRandomInt = (min, max) => Math.floor(exports.getRandomFloat(min, max));
exports.degToRadians = (angle) => angle * (Math.PI / 180);
exports.radiansToDeg = (angle) => angle * (180 / Math.PI);
exports.distance = (vertex1, vertex2) => {
    // sqrt( (x1 - x2)^2 + (y1 - y2)^2 )
    const x1 = vertex1.x;
    const y1 = vertex1.y;
    const x2 = vertex2.x;
    const y2 = vertex2.y;
    const dist = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    return dist;
};
//# sourceMappingURL=util.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const drawVertex = (ctx, vertex) => {
    ctx.strokeStyle = `rgba(${vertex.color.r}, ${vertex.color.g}, ${vertex.color.b}, ${vertex.color.a})`;
    ctx.fillStyle = `rgba(${vertex.color.r}, ${vertex.color.g}, ${vertex.color.b}, ${vertex.color.a / 2})`;
    ctx.beginPath();
    ctx.arc(vertex.x, vertex.y, vertex.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();
    // ctx.font = '12px Arial black';
    // ctx.fillStyle = 'black';
    // ctx.textAlign = 'center';
    // ctx.fillText(String(vertex.id), vertex.x, vertex.y);
};
const drawEdge = (ctx, edge) => {
    ctx.strokeStyle = `rgba(${edge.color.r}, ${edge.color.g}, ${edge.color.b}, ${edge.color.a})`;
    ctx.beginPath();
    ctx.moveTo(edge.vertex1.x, edge.vertex1.y);
    ctx.lineTo(edge.vertex2.x, edge.vertex2.y);
    ctx.stroke();
};
const drawShape = (ctx, shape) => {
    ctx.fillStyle = `rgba(${shape.color.r}, ${shape.color.g}, ${shape.color.b}, ${shape.color.a})`;
    ctx.beginPath();
    ctx.moveTo(shape.vertices[0].x, shape.vertices[0].y);
    for (let i = 1; i < shape.vertices.length; i++) {
        const vertex = shape.vertices[i];
        ctx.lineTo(vertex.x, vertex.y);
    }
    ctx.fill();
};
exports.draw = (ctx, options, vertices, edges, shapes) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (options.drawVertices) {
        for (const vertex of vertices) {
            drawVertex(ctx, vertex);
        }
    }
    if (options.drawEdges) {
        for (const edge of edges) {
            drawEdge(ctx, edge);
        }
    }
    if (options.drawShapes) {
        for (const shape of shapes) {
            drawShape(ctx, shape);
        }
    }
};
//# sourceMappingURL=draw.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util = __webpack_require__(2);
const updateVertex = (ctx, vertex) => {
    // Update location
    vertex.x +=
        vertex.speed *
            Math.cos(Util.degToRadians(vertex.angle)) *
            vertex.runAwayMultiplier;
    vertex.y +=
        vertex.speed *
            Math.sin(Util.degToRadians(vertex.angle)) *
            vertex.runAwayMultiplier;
    // Constrain the vertex to within the borders
    if (vertex.x < 0 + vertex.radius) {
        vertex.x = 0 + vertex.radius;
    }
    if (vertex.x > ctx.canvas.width - vertex.radius) {
        vertex.x = ctx.canvas.width - vertex.radius;
    }
    if (vertex.y < 0 + vertex.radius) {
        vertex.y = 0 + vertex.radius;
    }
    if (vertex.y > ctx.canvas.height - vertex.radius) {
        vertex.y = ctx.canvas.height - vertex.radius;
    }
    // Keep the vertex's angle reasonable
    if (vertex.angle >= 360) {
        vertex.angle -= 360;
    }
    else if (vertex.angle <= -360) {
        vertex.angle += 360;
    }
    // Update angle if hit wall. Account for radius.
    if (vertex.x <= 0 + vertex.radius ||
        ctx.canvas.width - vertex.radius <= vertex.x) {
        vertex.angle = 180 - vertex.angle;
    }
    else if (vertex.y <= 0 + vertex.radius ||
        ctx.canvas.height - vertex.radius <= vertex.y) {
        vertex.angle = 0 - vertex.angle;
    }
    return vertex;
};
const createEdges = (options, vertices, numNeighbors) => {
    const edges = [];
    // For each vertex
    for (const vertex1 of vertices) {
        // TODO: This (i.e. these steps to get the k-nearest-neighbors) can be more efficient
        // Create a edge to all vertices other than itself
        const edgesForVertex = [];
        for (const vertex2 of vertices) {
            if (vertex1 === vertex2)
                continue;
            // Create the edge so that vertex1 has the lower id
            let vertexA;
            let vertexB;
            if (vertex1.id <= vertex2.id) {
                vertexA = vertex1;
                vertexB = vertex2;
            }
            else {
                vertexA = vertex2;
                vertexB = vertex1;
            }
            // Record the formatted edge
            const edge = {
                vertex1: vertexA,
                vertex2: vertexB,
                color: options.edgeColors[Util.getRandomInt(0, options.edgeColors.length)],
            };
            edgesForVertex.push(edge);
        }
        // Sort the edges by distance
        edgesForVertex.sort((edgeA, edgeB) => {
            const distA = Util.distance(edgeA.vertex1, edgeA.vertex2);
            const distB = Util.distance(edgeB.vertex1, edgeB.vertex2);
            return distA - distB;
        });
        // Keep the first `numNeighbors` edges
        edgesForVertex.splice(numNeighbors);
        // Add those edges to the main edges array as long as the edge is not already in the list
        for (const edge of edgesForVertex) {
            const matches = edges.filter(l => l.vertex1.id === edge.vertex1.id && l.vertex2.id === edge.vertex2.id);
            if (matches.length === 0) {
                edges.push(edge);
            }
        }
    }
    return edges;
};
const findEdgeInEdges = (testEdge, edges) => {
    for (const edge of edges) {
        if (testEdge.vertex1.id === edge.vertex1.id &&
            testEdge.vertex2.id === edge.vertex2.id) {
            return true;
        }
    }
    return false;
};
const createTriangles = (options, vertices, edges) => {
    const triangles = [];
    for (const edge of edges) {
        for (const vertex of vertices) {
            // If vertex is part of the edge, skip
            if (edge.vertex1 === vertex || edge.vertex2 === vertex)
                continue;
            // If (edge.vertex1, vertex) && (vertex, edge.vertex2) are edges that exist. Create the test
            // edges here. Color doesn't actually matter since comparisons are done against id.
            let testEdge1;
            const color = { r: 0, g: 0, b: 0, a: 0 };
            if (vertex.id < edge.vertex1.id) {
                testEdge1 = { vertex1: vertex, vertex2: edge.vertex1, color };
            }
            else {
                testEdge1 = { vertex1: edge.vertex1, vertex2: vertex, color };
            }
            let testEdge2;
            if (vertex.id < edge.vertex2.id) {
                testEdge2 = { vertex1: vertex, vertex2: edge.vertex2, color };
            }
            else {
                testEdge2 = { vertex1: edge.vertex2, vertex2: vertex, color };
            }
            // Find if there are matching edges
            const test1 = findEdgeInEdges(testEdge1, edges);
            const test2 = findEdgeInEdges(testEdge2, edges);
            // Run the test
            if (test1 && test2) {
                const triangle = {
                    vertices: [vertex, edge.vertex1, edge.vertex2],
                    color: options.shapeColors[Util.getRandomInt(0, options.shapeColors.length)],
                };
                triangles.push(triangle);
            }
        }
    }
    return triangles;
};
exports.update = (progress, ctx, options, vertices, edges, shapes) => {
    // Move vertices
    for (const vertex of vertices) {
        updateVertex(ctx, vertex);
    }
    // Create/find the new set of edges
    edges = createEdges(options, vertices, options.numNeighbors);
    // Create/find the new set of shapes
    shapes = createTriangles(options, vertices, edges);
    return { vertices, edges, shapes };
};
//# sourceMappingURL=update.js.map

/***/ })
/******/ ]);