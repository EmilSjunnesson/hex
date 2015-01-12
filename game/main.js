window.hex = window.hex || { };

$(document).ready(function(){
	
	// Initiate game
	hex.Game.init();
	
	// Pressed card
	$('.card').click(function() {
		hex.Game.clickedCard($(this).prop('id').replace('card', ''));
	});
	
	// Pressed un-mute button
	$('#un-mute').click(function() {
		hex.Game.toggleAudio();
	});
	
	// Menu div
	$('#menu-button').click(function() {
		$('#overlay')
		.show()
		.css('top', 0)
	    .css('opacity', '0')
	    .animate({'opacity': '0.5'}, 'slow');
		$('#menu-popup').fadeIn();
	});
	$('#no').click(function() {
		$('#menu-popup').fadeOut();
		$('#overlay').fadeOut();
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
	
	// Audio vars
	var noSetSound, setSound, bgMusic,
	mute = false;
	
	// Initiates the game
	var init = function() {
		
		// Setup sound
		noSetSound = new Audio('../sound/noset.ogg');
		setSound = new Audio('../sound/set.ogg');
		bgMusic = new Audio('../sound/mainmusic.mp3');
		bgMusic.loop = true;
		bgMusic.volume = 0.1;
		bgMusic.play();
		
		// Hide popups
		$('.popup').hide();
		$('#overlay').hide();
		
		updateUI(getActiveCards(12));

		// Start timebonus timer
		hex.Timers.startTimeBonusTimer();
		
		console.log('Game started');
	};
	
	// Function executed on card click
	function clickedCard(id) {
		toggleState(id);
		if (pressedCount === 1) {
			compareCard1 = currCard;
			if (lastIndexState) {
				lastIndex = currCard.index;
				lastIndexState = false;
			}
		} else if (pressedCount === 2) {
			compareCard2 = currCard;
		} else if (pressedCount === 3) {
			compareCard3 = currCard;
			checkSelection();
		}
	}
	
	// Toggle sound and music on/off
	function toggleAudio() {
		mute = !mute;
		bgMusic.muted = mute;
	}
	
	// Cards works as togglebuttons
	function toggleState(pos) {
		toggle[pos] = !toggle[pos];
		if (toggle[pos] == true) {
			//selectedImg[pos].setVisibility(View.VISIBLE);
			//select_Anim[pos].stop();
			//select_Anim[pos].start();
			$('#card' + pos).addClass('selected');
			// *** change card to selected, maybe animation
			currCard = activeCards[pos];
			pressedCount++;
		} else if (toggle[pos] == false) {
			//selectedImg[pos].setVisibility(View.INVISIBLE);
			$('#card' + pos).removeClass('selected');
			// *** change card to unselected visibilty
			currCard = activeCards[lastIndex];
			pressedCount--;
		}
	}
	
	// Resets frames and selection logic
	function resetSelect() {
		for (var i = 0; i < toggle.length; i++) {
			toggle[i] = false;
		}
		//selectedImg[i].setVisibility(View.INVISIBLE);
		$('.card').removeClass('selected');
		// *** change card to unselected visibilty
		pressedCount = 0;
		lastIndexState = true;
	}
	
	// Runs when three cards has been selected
	function checkSelection() {
		set = isSet(compareCard1, compareCard2, compareCard3);
		if (set == true) {
			gamestarted = false;
			//for (var i = 0; i < hintView.length; i++) {
				//hintView[i].setVisibility(View.INVISIBLE);
				//hintView[i].clearAnimation();
			//}
			// *** clear hint-visuals
			
			// Reset timer
			hex.Timers.killComboTimer();
			hex.Timers.add1000Points();
			hex.Timers.startComboTimer();
			
			if(!mute) {
				setSound.play();
			}
			
			// Add the score you get to the total score
			score = score + hex.Timers.getPoints();
			
			// Show custom toast based on points you get from your set
			if (!isEmpty(deck)) {
				showScorePopup(hex.Timers.getPoints());
			}
			
			// Start timeglass animation, and if it is running; restart it
			//if (timeglassAnimation.isRunning()) {
				//timeglassAnimation.stop();
			//}
			//timeglassAnimation.start();
			// *** Start timeglass/stop first
			
			// Update score text
			$('#score-text').text(score);
			
			hex.Timers.clearAll();
			
			if (!isEmpty(deck)) {
				updateUI(getNewCards(compareCard1.index, compareCard2.index, compareCard3.index));
			} else if (isEmpty(deck)) {
				win();
				// Stop timebouns timer
				hex.Timers.killTimeBonusTimer();
			}
			set = false;
		} else if (set == false) {
			if(!mute) {
				noSetSound.play();
			}
			//TODO *** indicate noSet, ljud, visuellt
		}
		resetSelect();
	}
	
	// Run when there's not card left in deck
	function win() {
		//Intent showScoreIntent = new Intent(getApplicationContext(),
		//ShowScore.class);
		//showScoreIntent.putExtra("score", score);
		//showScoreIntent.putExtra("Timebonus", timebonusTimerClass.getTimebonus());
		//startActivity(showScoreIntent);
		//finish();
		
		var timeBonus = hex.Timers.timeBonus;
		
		// *** Show score (in dialog?) and redirect with post score
		// fast i show score så kanske det finns logik till att testa så man platsar i highscore?
		// ikke att förglömma timebonus!
	}
	
	// Update cards(divs) and text
	function updateUI(activeCards) {
		for (var i = 0; i < maxOnTable; i++) {
			//add image to card
			$('#card' + i).css('background-image', 'url(' + activeCards[i].imgSrc + ')');
		}
		if (newSet === true) {
			// Animate in new cards
			$('.card').hide();
			$('.card').each(function(index) {
			    $(this).delay(400*index).slideDown(300);
			});
			newSet = false;
		}
	}
	
	function showScorePopup(score) {
		$('#score-popup')
		.css('background-image', 'url(../img/popups/set' + score + '.png)')
		.fadeIn('slow', function() {
			setTimeout(function() {
				$('#score-popup').fadeOut('slow');
			}, 1000);
		});
		
	}
	
	// Showing hints called from timers
	function showHint(hintNbr) {
		console.log('Showing ' + hintNbr + ' hint');
		//TODO hint visuals
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
			activeCards[indexes[i]] = deck.shift();
			activeCards[indexes[i]].index = indexes[i];
			//TODO SLID IN CARDS kanske ge dem en klass?
			//$('#card'+indexes[i]).css('visibility','hidden');
			//$('#card'+indexes[i]).delay(400*i).slideDown(300);
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
			deck = shuffle(deck);
			placeCardsOnTable(12);
			checkForSet();
		};
	}
	
	// remove all active cards an place them back in deck
	function removeFromActive() {
		var loops = activeCards.length;
		for (var i = 0; i < loops; i++) {
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
			console.log("Index of SET: " + (card1.index + 1) + " | "
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
		
		var slots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
		var combinations = slots.combinate(3);
		
		for (var i = 0; i < combinations.length; i++) {
			var cards = combinations[i];
			isSetOnTable(activeCards[cards[0]], activeCards[cards[1]], activeCards[cards[2]]);
		}
		console.log("SET i kort: " + nbrOfSets);
	}

	return {
		'init': init,
		'clickedCard' : clickedCard,
		'showHint' : showHint,
		'toggleAudio' : toggleAudio
	};
})();


