function all(argList){

	for(a in argList){
		if(!argList[a]){
			return false;
		}
	}

	return true;

};
