<?php $title='Score'; include(__DIR__ . '/../incl/header.php'); 
if ((!isset($_POST['score'])) && (!isset($_POST['timeBonus']))) {
	die('You need to win the game to access this page');
}?>

<div id="show-score">
	<img alt="hex" src="../img/hex.png">
	
	<p>Score:<br>
	<span id="score"><?=$_POST['score']?></span></p>
	
	<p>Time bonus:<br>
	<span id="timeBonus"><?=$_POST['timeBonus']?></p>
	
	<p>Final score:<br>
	<span id="finalScore">0</p>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
