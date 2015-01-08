window.hex = window.hex || { };

hex.Timers = (function(){
	var timeBonusTimer,
	comboTimer,
	timeBonus = 0,
	points = 0,
	comboScore1 = 0,
	comboScore2 = 0;
	firstSet = false;
	
	// Start timer for time bonus
	function startTimeBonusTimer() {
		timeBonusTimer = setInterval(function() {timeBonusFunction();}, 1000);
	}
	
	// Stop timer for time bonus
	function killTimeBonusTimer() {
		clearInterval(timeBonusTimer);
	}
	
	// Time bouns timer function + call show hint
	function timeBonusFunction() {
		timeBonus++;
		// Show hint 1 after 1 min, hint 2 after 1,5 min if first set has no been  made
		if(!firstSet) {
			if(timeBonus === 60) {
				hex.Game.showHint(1);
			} else if(timeBonus === 90) {
				hex.Game.showHint(2);
			}
		}
	}
	
	// Return timeBouns
	function getTimeBonus() {
		return timeBonus;
	}
	
	// Start timer for combo
	function startComboTimer() {
		comboTimer = setInterval(function() {comboFunction();}, 500);
		firstSet = true;
	}
	
	// Stop timer for comob
	function killComboTimer() {
		clearInterval(comboTimer);
		// Calculate points to give to player
		comboScore2 = convertComboPoints(comboScore1);
		points = points+comboScore2;
		comboScore1 = 0;
	}
	
	// Adds points for completing set
	function add1000Points() {
		points = points + 1000;
	}
	
	// Combo timer function
	function comboFunction() {
		comboScore1++;
		if(comboScore1 === 131) {
			// Show hint 1
			hex.Game.showHint(1);
		} else if(comboScore1 === 191) {
			// Show hint 2
			hex.Game.showHint(2);
		} else if(comboScore1 > 195) {
			// If player takes to long, stop timer
			clearInterval(comboTimer);
		}
	}
	
	// Converts the points from the comboTimer to the actual points you will get in the game
	function convertComboPoints(comboPoints){
			var comboPoints2 = 0;
			if(comboPoints == 0){
				comboPoints2=0;
				// Since addPoints adds 1000 points this calculates -1000 to make the final score correct
			} else if (comboPoints < 20){
				comboPoints2 = 9000;
			} else if(comboPoints < 45 && comboPoints > 20) {
				comboPoints2 = 4000;
			} else if (comboPoints < 60 && comboPoints > 45){
				comboPoints2 = 2000;
			} else if (comboPoints < 90 && comboPoints > 60){
				comboPoints2 = 1000;
			} else if (comboPoints < 130 && comboPoints > 90){
				comboPoints2 = 500;
			} else {
				comboPoints2 = 0;
			}
			return comboPoints2;
		}
	
		// Clear all points
		function clearAll(){
			points = 0;
			comboScore1 = 0;
			comboScore2 = 0;
		}
		
		// Return points
		function getPoints() {
			return points;
		}
		
	return {
		'startTimeBonusTimer': startTimeBonusTimer,
		'killTimeBonusTimer' : killTimeBonusTimer,
		'getTimeBonus' : getTimeBonus,
		'killComboTimer' : killComboTimer,
		'add1000Points' : add1000Points,
		'startComboTimer' : startComboTimer,
		'getPoints' : getPoints,
		'clearAll' : clearAll
	};
})();