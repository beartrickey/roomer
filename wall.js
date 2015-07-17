function createWall(_column, _row, _offset, _type){

	var column = _column;
	var row = _row;
	var offset = _offset;
	var type = _type;
	
	return {
		getCoords: function(){return [column, row];},

		getOffset: function(){return offset;},
		setOffset: function(_offset){offset = _offset;},

		getType: function(){return type;},
		setType: function(_type){type = _type;}
	};

};
