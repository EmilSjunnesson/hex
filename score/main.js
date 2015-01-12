$(document).ready(function(){
   var score, timeBouns;
   
   // Get score and timeBonus from the game
   score = $('#score').text();
   timeBouns = $('#timeBonus').text();
   console.log('score: ' + score + ' timeBonus: '+ timeBouns);
});
