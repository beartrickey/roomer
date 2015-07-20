var rooms = (function(){

	var createRoom = function(arg){

		var column = args.column;
		var row = args.row;
		var type = args.type;
		
		return {
			getCoords: function(){return [column, row];},
			getType: function(){return type;},
			setType: function(_type){type = _type;}
		};

	};

	var getRoomAtCoords = function(column, row){
		var normalizedColumn = column + MAX_GRID_LIMIT;
		var normalizedRow = row + MAX_GRID_LIMIT;
		return roomList[(normalizedRow * NUM_COLUMNS) + normalizedColumn];
	};

	return {
		createRoom: createRoom,
		getRoomAtCoords: getRoomAtCoords

	};
})();
