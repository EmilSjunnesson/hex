<?php $title='Highscore'; include(__DIR__ . '/../incl/header.php');

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
?>
<div id="highscore-scroll">
<?php if(isset($_GET['q']) && $_GET['q'] === 'new') : 
if ((!isset($_POST['score']))) {
	die('You need to win the game to access this page');
}?>
	<p><?=$_POST['score']?></p>
	<form action="?q=add" method="post">
		<input type="hidden" value="<?=$_POST['score']?>" name="score" id="score">
		<input type="text" required="required" autofocus="autofocus" name="name" id="name">
		<input type="submit" value="OK">
	</form>
<?php elseif(isset($_GET['q']) && $_GET['q'] === 'add') : 
if ((!isset($_POST['score'])) && (!isset($_POST['name']))) {
	die('You need to win the game to access this page');
}
$stmt = $db->prepare('
  INSERT INTO Highscore
  (name, score)
  VALUES (?, ?);
');
$stmt->execute([$_POST['name'], $_POST['score']]);
header('Location: index.php');
?>
<?php else : 
$stmt = $db->prepare('SELECT * FROM Highscore ORDER BY score DESC LIMIT 10;');
$stmt->execute();
$res = $stmt->fetchAll(PDO::FETCH_OBJ);
?>
<table style="border-right: 1px solid black;">
<?php for ($i = 1; $i < 6; $i++) {
	if(isset($res[$i -1])) {
		echo "<tr><td>{$i}.</td><td>{$res[$i -1]->name}</td><td>{$res[$i -1]->score}</td></tr>";
	}
}?>
</table>
<table>
<?php for ($i = 6; $i < 11; $i++) {
	if(isset($res[$i -1])) {
		echo "<tr><td>{$i}.</td><td>{$res[$i -1]->name}</td><td>{$res[$i -1]->score}</td></tr>";
	}
}?>
</table>
<a href="../start">Back to main menu</a>
<?php endif; ?>
</div>
<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
