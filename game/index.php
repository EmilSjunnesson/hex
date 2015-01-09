<?php $title='Game'; include(__DIR__ . '/../incl/header.php'); ?>
<div id="board">
<div id="candles"></div>
<input type="checkbox" name="un-mute" id="un-mute">
<label for="un-mute" class="unmute">
	<img src="../img/mute.png" alt="mute">
</label>
<label for="un-mute" class="mute">
	<img src="../img/speaker.png" alt="unmute">
</label>
<img alt="score background" src="../img/forscore.png" id="score-bg" />
<p id="score-text">0</p>
<div id="cards">
<?php for ($i = 0; $i <12; $i++) : ?>
<div id="card<?=$i?>" class="card"></div>
<?php endfor; ?>
</div>
</div>
<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
