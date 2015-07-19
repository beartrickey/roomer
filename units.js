var units = (function(){

	var unitList = [];

	var createUnit = function(position, strength){
		unitList.push({
			position: position,
			direction: [0.0, 0.0, 0.25],
			strength: strength
		});
	};

	var updateUnits =  function(position, strength){
		unitList.forEach(function(unit){
			var currentRoom = getUnitRoom(unit);

			// Update position
			unit.position = vectorAdd(unit.position, unit.direction);
		});
	};

	var getUnitRoom = function(unit){
		var column = Math.floor(unit.position[0] / ROOM_WIDTH);
		var row = Math.floor(unit.position[2] / ROOM_WIDTH);
		return getRoomAtCoords(column, row);
	};

	var drawUnits = function(){
		unitList.forEach(function(unit){
			drawMesh(
				unitMesh,
				unit.position,
				[0.0, 0.0, 0.0]
			);
		});
	}

	return {
		createUnit: createUnit,
		updateUnits: updateUnits,
		getUnitRoom: getUnitRoom,
		drawUnits: drawUnits
	};

})();
