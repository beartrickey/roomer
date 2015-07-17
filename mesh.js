function createMesh(vertexList, vertexColorList, triangleList){

	// ============================================
	// VERTICES
	// ============================================
	var vertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexList), gl.STATIC_DRAW);
	vertexPositionBuffer.itemSize = 3;
	vertexPositionBuffer.numItems = vertexList.length / 3;

	// ============================================
	// COLORS
	// ============================================
	var unpackedColors = [];
	for(var i in vertexColorList){
		var color = vertexColorList[i];
		for(var j=0; j < 4; j++){
			unpackedColors = unpackedColors.concat(color);
		}
	}

	var vertexColorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(unpackedColors), gl.STATIC_DRAW);
	vertexColorBuffer.itemSize = 4;
	vertexColorBuffer.numItems = vertexColorList.length / 4;


	// ============================================
	// TRIANGLES
	// ============================================
	var triangleVertIndexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleVertIndexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(triangleList), gl.STATIC_DRAW);
	triangleVertIndexBuffer.itemSize = 1;
	triangleVertIndexBuffer.numItems = triangleList.length;

	return {
		getVertexPositionBuffer: function(){return vertexPositionBuffer;},
		getVertexColorBuffer: function(){return vertexColorBuffer;},
		getTriangleBuffer: function(){return triangleVertIndexBuffer;}
	};
	
};