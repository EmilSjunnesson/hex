$(document).ready(function(){
   var score, timeBounsSec, timeBonusMin, finalScore,
   minutes, seconds;
   
   // Get score and timeBonus from the game
   score = $('#score').text();
   timeBounsSec = $('#timeBonus').text();
   console.log('score: ' + score + ' timeBonus: '+ timeBounsSec);

   timeBonusMin = roundToDecimals(timeBounsSec/60, 2);
   finalScore = calculateFinalScore(score, timeBonusMin);
   
   minutes = Math.floor(timeBounsSec / 60);
   seconds = timeBounsSec - minutes * 60;
   
   // Print out score
   $('#timeBonus').text(minutes + ' min ' + seconds + ' sec');
   $('#finalScore').text(finalScore);
   
   //TODO kolla om nytt highscore annars alternativ spela igen / till menu
   // HÄMTA HIGHSCORE FRÅN DATABASEN NÄR SIDAN LADDAS
   // LÄGG SEDAN IN DET I I JS KODEN 
});

//get final score from time and score
function calculateFinalScore(s, tb) {
	var fs = 0;
	fs = (s/tb*10)+parseInt(s); // DETTA VISA SOM TIMEBONUS?
	return parseInt(fs);
}

// Round to decimals
function roundToDecimals(d, c) {
	var temp = parseInt(d * Math.pow(10, c));
	return (parseFloat(temp) / Math.pow(10, c));
}