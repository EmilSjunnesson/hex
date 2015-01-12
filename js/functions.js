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

// Check if any number of values are equal
function areEqual(){
	var len = arguments.length;
	for (var i = 1; i< len; i++){
		if (arguments[i] == null || arguments[i] != arguments[i-1]){
			return false;
		}
	}
	return true;
}

// http://www.mennovanslooten.nl/blog/post/51
// Extends array to create an array of all posible combinations
Array.prototype.combinate = function( iItems, aIn ) {
    if (!aIn) {
        var aIn = new Array();
        this.combinate.aResult = new Array();
    }
    
    for(var i = 0; i < this.length; i++) {
        var a = aIn.concat(this[i]);
        var aRest = this.concat(); // Concat with nothing to create copy
        aRest.splice(0, i + 1);
        
        if(iItems && iItems - 1 <= aRest.length) {
            aRest.combinate(iItems - 1, a);
            if(iItems == 1) this.combinate.aResult.push(a);
        }
    }
    
    return this.combinate.aResult;
};

// Redirect with post
// http://stackoverflow.com/questions/8389646/send-post-data-on-redirect-with-javascript-jquery
$.extend(
{
    redirectPost: function(location, args)
    {
        var form = '';
        $.each( args, function( key, value ) {
            value = value.split('"').join('\"');
            form += '<input type="hidden" name="'+key+'" value="'+value+'">';
        });
        $('<form action="' + location + '" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
    }
});