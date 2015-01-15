<?php $title='Score'; include(__DIR__ . '/../incl/header.php'); 
if ((!isset($_POST['score'])) && (!isset($_POST['timeBonus']))) {
	die('You need to win the game to access this page');
}

$db = new PDO("sqlite:../data/highscore.sqlite");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING); // Display errors, but continue script

// Create a table, but only if it not already exists.
$stmt = $db->prepare('
  CREATE TABLE IF NOT EXISTS Highscore
  (
    id INTEGER PRIMARY KEY NOT NULL UNIQUE,
    name TEXT,
    score INTEGER
  );
');
$stmt->execute();
$stmt = $db->prepare('SELECT * FROM Highscore ORDER BY score DESC LIMIT 10;');
$stmt->execute();
$res = $stmt->fetchAll(PDO::FETCH_OBJ);
if (isset($res[9])) {
	$threshold = $res[9]->score;;
} else {
	$threshold = 0;
}
echo "<p class='hidden' id='threshold'>{$threshold}</p>";
?>

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
