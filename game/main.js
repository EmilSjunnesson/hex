window.hex = window.hex || { };

$(document).ready(function(){
	
	hex.Game.init();
	
	$('.card').click(function() {
		$(this).toggleClass('selected');
		console.log($(this).prop('id'));
	});
	
});

/**
 * The game
 */
hex.Game = (function(){
	// Logic vars
	var hintIndex1, hintIndex2,
	nbrOfSets = 0,
	deck = [],
	activeCards = [];
	
	// Display vars
	var currCard, comapareCard1, comapareCard2, comapareCard3,
	set, lastIndex,
	toggle = [],
	pressedCount = 0,
	newSet = true,
	score = 0,
	gameStarted = true,
	lastIndexState = true,
	maxOnTable = 12;
	
	// Initiates the game
	var init = function() {
		
		//TODO setup music
		
		updateUI(getActiveCards(12));
		
		//TODO start timebonus timer
		
		console.log('Game started');
	};
	
	// update cards(divs) and text
	function updateUI(activeCards) {
		for (var i = 0; i < maxOnTable; i++) {
			//add image to card
			$('#card' + i).css('background-image', 'url(' + activeCards[i].imgSrc + ')');
		}
		if (newSet == true) {
			for (var i = 0; i < maxOnTable; i++) {
				//iv[i].startAnimation(placeCards[i]);
			}
			newSet = false;
		} else if (newSet == false) {
			// Byta bild animation.
//			iv[compareCard1.getIndex()].startAnimation(replaceCards[0]);
//			iv[compareCard2.getIndex()].startAnimation(replaceCards[1]);
//			iv[compareCard3.getIndex()].startAnimation(replaceCards[2]);
//			replaceCards[2].setAnimationListener(new AnimationListener() {
//			@Override
//			public void onAnimationStart(Animation animation) {
//			}
//			@Override
//			public void onAnimationRepeat(Animation animation) {
//			}
//			@Override
//			public void onAnimationEnd(Animation animation) {
//			iv[compareCard1.getIndex()].clearAnimation();
//			iv[compareCard2.getIndex()].clearAnimation();
//			iv[compareCard3.getIndex()].clearAnimation();
//			}
//			});
		};
	}
  
	// Creates deck and places 12 cards in active
	function placeCardsOnTable(cardsNeeded) {
		cardsNeeded = cardsNeeded || 0;
		if (isEmpty(deck)) {
			deck = hex.getAllCards();
		}
		for (var i = 0; i < cardsNeeded; i++) {
			activeCards[activeCards.length] = deck.shift();
			activeCards[i].index = i;
		}
		console.log("Kort kvar i deck: " + deck.length);
	}
	
	// Returns the first 12 active cards after checks and re-deals
	function getActiveCards(cardsNeeded) {
		placeCardsOnTable(cardsNeeded);
		checkAndRedeal();
		return activeCards; //onödig return?
	}
	
	// take cards from deck and place them in active cards
	function getNewCards(card1Index, card2Index, card3Index) {
		var indexes = [card1Index, card2Index, card3Index];
		for (var i = 0; i < indexes.length; i++) {
			activeCards[i] = deck.shift();
			activeCards[i].index = i;
		}
		console.log("Kort kvar i deck: " + deck.length);
		checkAndRedeal();
		return activeCards; //onödig return
	}
	
	// check active cards for set and re-deal if needed
	function checkAndRedeal() {
		checkForSet();
		while (nbrOfSets <= 0) {
			console.log("Inget SET");
			removeFromActive();
			shuffle(deck);
			placeCardsOnTable(12);
			checkForSet();
		};
	}
	
	// remove all active cards an place them back in deck
	function removeFromActive() {
		for (var i = 0; i < activeCards.length; i++) {
			deck[deck.length] = activeCards.shift();
		}
	}
	
	// compare selected cards
	function isSet(card1, card2, card3) {
		if (isSetProperty(card1, card2, card3, 'number') 
			&& isSetProperty(card1, card2, card3, 'color') 
			&& isSetProperty(card1, card2, card3, 'shape')
			&& isSetProperty(card1, card2, card3, 'filling')) {
			return true;
		} else {
			return false;
		}
	}
	
	// compare for hint and re-deal logic
	function isSetOnTable(card1, card2, card3) {
		if (isSet(card1, card2, card3)) {
			nbrOfSets++;
			console.log("Index of SET:" + (card1.index + 1) + " | "
			+ (card2.index + 1) + " | " + (card3.index + 1));
			hintIndex1 = card1.index;
			hintIndex2 = card2.index;
		}
	}
	
	// compare the propertys of the cards
	function isSetProperty(card1, card2, card3, property) {
		if ((card1[property] === card2[property] && card2[property] === card3[property])
		|| (card1[property] !== card2[property]
		&& card2[property] !== card3[property] && card1[property] 
		!== card3[property])) {
			return true;
		} else {
			return false;
		}
	}
	
	function getNbrOfCardsLeft() {
		return deck.length;
	}
	
	// checks all cards on table for sets
	function checkForSet() {
		nbrOfSets = 0;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				for (var k = 0; k < 3; k++) {
					isSetOnTable(activeCards[i], activeCards[j], activeCards[k]);
				}
				
			}
		}
		console.log("SET i kort: " + nbrOfSets);
	}

	return {
		'init': init
	};
})();


