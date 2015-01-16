$(document).ready(function(){
   var score, timeBounsSec, timeBonusMin, finalScore,
   minutes, seconds, threshold;
   
   // Get score and timeBonus from the game
   score = $('#score').text();
   timeBounsSec = $('#timeBonus').text();
   
   // Get threshold from database
   threshold = $('#threshold').text();
   console.log('score: ' + score + ' timeBonus: '+ timeBounsSec + ' threshold: ' + threshold);

   timeBonusMin = roundToDecimals(timeBounsSec/60, 2);
   finalScore = calculateFinalScore(score, timeBonusMin);
   
   minutes = Math.floor(timeBounsSec / 60);
   seconds = timeBounsSec - minutes * 60;
   
   // Print out score
   $('#timeBonus').text(minutes + ' min ' + seconds + ' sec');
   $('#finalScore').text(finalScore);
   
   //kolla om nytt highscore annars alternativ spela igen / till menu
   if (finalScore > threshold) {
	   $('#no-highscore').hide();
   } else {
	   $('#new-highscore').hide();
   }
   
   $('#to-hs').click(function() {
	   $.redirectPost('../highscore/index.php?q=new', {score: String(finalScore)});
   });
   
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