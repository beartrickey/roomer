var doorMeshInfo = (function(){

	var scale = [WALL_THICKNESS, WALL_HEIGHT, ROOM_WIDTH];

	return {

		vertexList: [

			// Front face
                        -0.5 * scale[0], 0.0,  0.5 * scale[2],
                        0.5 * scale[0], 0.0,  0.5 * scale[2],
                        0.5 * scale[0],  1.0 * scale[1],  0.5 * scale[2],
                        -0.5 * scale[0],  1.0 * scale[1],  0.5 * scale[2],

			// Back face
			-0.5 * scale[0], 0.0, -0.5 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1], -0.5 * scale[2],
			0.5 * scale[0],  1.0 * scale[1], -0.5 * scale[2],
			0.5 * scale[0], 0.0, -0.5 * scale[2],

			// Top face 1
			-0.5 * scale[0],  1.0 * scale[1], -0.5 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1],  -0.25 * scale[2],
			0.5 * scale[0],  1.0 * scale[1],  -0.25 * scale[2],
			0.5 * scale[0],  1.0 * scale[1], -0.5 * scale[2],

			// Top face 2
			-0.5 * scale[0],  1.0 * scale[1], 0.25 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1],  0.5 * scale[2],
			0.5 * scale[0],  1.0 * scale[1],  0.5 * scale[2],
			0.5 * scale[0],  1.0 * scale[1], 0.25 * scale[2],

			// Left face 1
			-0.5 * scale[0], 0.0, -0.5 * scale[2],
			-0.5 * scale[0], 0.0, -0.25 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1],  -0.25 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1], -0.5 * scale[2],

			// Left face 2
			-0.5 * scale[0], 0.0, 0.25 * scale[2],
			-0.5 * scale[0], 0.0,  0.5 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1],  0.5 * scale[2],
			-0.5 * scale[0],  1.0 * scale[1], 0.25 * scale[2],

			// Door left face
			-0.5 * scale[0], 0.0, -0.25 * scale[2],
			-0.5 * scale[0], 0.0,  0.25 * scale[2],
			-0.5 * scale[0],  0.8 * scale[1],  0.25 * scale[2],
			-0.5 * scale[0],  0.8 * scale[1], -0.25 * scale[2],

			// Door top face
			-0.5 * scale[0], 0.8 * scale[1], -0.25 * scale[2],
			-0.5 * scale[0], 0.8 * scale[1], 0.25 * scale[2],
			0.5 * scale[0], 0.8 * scale[1],  0.25 * scale[2],
			0.5 * scale[0], 0.8 * scale[1], -0.25 * scale[2]
		],

		colorList: [
			[0.5, 0.5, 0.5, 1.0], // Front left face
			[1.0, 1.0, 0.0, 1.0], // Back face
			[0.75, 0.75, 0.75, 1.0], // Top face 1
			[0.75, 0.75, 0.75, 1.0], // Top face 2
			[0.5, 0.5, 0.5, 1.0],  // Left face 1
			[0.5, 0.5, 0.5, 1.0],  // Left face 2
			[0.2, 0.2, 0.25, 1.0],  // Door left face
			[0.45, 0.45, 0.5, 1.0]  // Door top face
		],

		triangleList: [
			0, 1, 2,      0, 2, 3,    // Front left face
			4, 5, 6,      4, 6, 7,    // Back face
			8, 9, 10,     8, 10, 11,  // Top face 1
			12, 13, 14,     12, 14, 15,  // Top face 1
			16, 17, 18,   16, 18, 19,  // Left face 1
			20, 21, 22,   20, 22, 23,  // Left face 2
			24, 25, 26,   24, 26, 27,  // Door left face
			28, 29, 30,   28, 30, 31  // Door top face
		]

	};
})();
