//Shuffle array
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//Check if an array is empty
function isEmpty(array){
	if(typeof array != "undefined" && array != null && array.length > 0){
		return false;
	} else {
		return true;
	}
}

//check if any number of values are equal
function areEqual(){
	var len = arguments.length;
	for (var i = 1; i< len; i++){
		if (arguments[i] == null || arguments[i] != arguments[i-1]){
			return false;
		}
	}
	return true;
}