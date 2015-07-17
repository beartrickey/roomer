function createRoom(_column, _row, _type){

	var column = _column;
	var row = _row;
	var type = _type;
	
	return {
		getCoords: function(){return [column, row];},
		getType: function(){return type;},
		setType: function(_type){type = _type;}
	};

};
