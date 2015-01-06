window.hex = window.hex || { };

hex.Card = function(number, color, shape, filling, imgSrc) {
	this.number = number;
	this.color = color;
	this.shape = shape;
	this.filling = filling;
	this.imgSrc = imgSrc;
	this.index = -1;
};

hex.getAllCards = function() {
	var numbers = [1, 2, 3],
	colors = ['red', 'green', 'blue'],
	shapes = ['triangle', 'diamond', 'moon'],
	fillings = ['full', 'empty', 'striped'],
	deck = [],
	i = 0;

	// fill deck with cards
	for (var f = 0; f < fillings.length; f++) {
		for (var n = 0; n < numbers.length; n++) {
			for (var s = 0; s < shapes.length; s++) {
				for (var c = 0; c < colors.length; c++) {
					i++;
					deck[deck.length] = new hex.Card(numbers[n], colors[c], shapes[s], fillings[f], '../img/cards/card' + i + '.png');
				}
			}
		}
	}

	//shuffle deck
	return shuffle(deck);
};