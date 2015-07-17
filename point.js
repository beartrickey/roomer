//============================================
// POINT
//============================================
function pointAdd(a, b){
	return [a[0] + b[0], a[1] + b[1]];
};

function pointMult(a, b){
	if(typeof(b) === "number"){
		return [a[0] * b, a[1] * b];
	}else if(typeof(b) === "object"){
		return [a[0] * b[0], a[1] * b[1]];
	}
};

//============================================
// VECTOR
//============================================
function vectorAdd(a, b){
	return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
};

function vectorMult(a, b){
	if(typeof(b) === "number"){
		return [a[0] * b, a[1] * b, a[2] * b];
	}else if(typeof(b) === "object"){
		return [a[0] * b[0], a[1] * b[1], a[2] * b[2]];
	}
};