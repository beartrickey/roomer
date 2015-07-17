var floorMeshInfo = (function(){

	var scale = [ROOM_WIDTH, ROOM_WIDTH, ROOM_WIDTH];

	return {

		vertexList: [

			// Top face
			-0.5 * scale[0],  0.0, -0.5 * scale[2],
			-0.5 * scale[0],  0.0,  0.5 * scale[2],
			0.5 * scale[0],  0.0,  0.5 * scale[2],
			0.5 * scale[0],  0.0, -0.5 * scale[2],

		],

		colorList: [
			[0.4, 0.4, 0.4, 1.0], // Top face
		],

		triangleList: [
			0, 1, 2,      0, 2, 3,    // Front face
		]

	};
})();
