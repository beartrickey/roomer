function createUnit(_column, _row, _strength){

	var column = _column;
	var row = _row;
	var position = [];
	var strength = _strength;

	return {
		column: column,
		row: row,
		position: position,
		strength: strength
	};
};


function drawUnit(unit){

	var centerPosition = [
		unit.position[0],
		0.0,
		unit.position[1]
	];

	drawMesh(
		unitMesh,
		centerPosition,
		[0.0, 0.0, 0.0]
	);
};
