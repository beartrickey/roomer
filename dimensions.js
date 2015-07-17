// Dimensions
var NUM_ROWS = 9;
var NUM_COLUMNS = 9;

var MAX_GRID_LIMIT = Math.floor(NUM_COLUMNS / 2);
var MIN_GRID_LIMIT = Math.floor(NUM_COLUMNS / 2) * -1.0;

var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var WALL_THICKNESS = 5.0;
var WALL_HEIGHT = WALL_THICKNESS * 5.0;
var ROOM_WIDTH = ((CANVAS_WIDTH - (WALL_THICKNESS * 20.0)) / NUM_COLUMNS);

// ROOMS
var NUM_ROOMS = NUM_ROWS * NUM_COLUMNS;

var ROOM_TYPE_BLANK = 0;
var ROOM_TYPE_NORMAL = 1;


// WALLS
var WALL_OFFSET_LEFT = 0;
var WALL_OFFSET_UP = 1;
var WALL_OFFSET_RIGHT = 2;
var WALL_OFFSET_DOWN = 3;

var WALL_TYPE_NORMAL = 0;
var WALL_TYPE_DOOR = 1;
var NUM_WALL_TYPES = 2;