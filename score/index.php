<?php $title='Template for testprogram'; include(__DIR__ . '/../incl/header.php'); 
if ((!isset($_POST['score'])) && (!isset($_POST['timeBonus']))) {
	die('You need to win the game to access this page');
}?>
<p class="hidden" id="score"><?=$_POST['score']?></p>
<p class="hidden" id="timeBonus"><?=$_POST['timeBonus']?></p>

<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
