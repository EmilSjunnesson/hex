<?php $title='Game'; include(__DIR__ . '/../incl/header.php'); ?>
<div id="board">
<div id="candles"></div>
<div id="timeglass"></div>
<div id="overlay"></div>
<input type="checkbox" name="un-mute" id="un-mute">
<label for="un-mute" class="unmute">
	<img src="../img/mute.png" alt="mute">
</label>
<label for="un-mute" class="mute">
	<img src="../img/speaker.png" alt="unmute">
</label>
<img src="../img/menu.png" alt="menu" id="menu-button">
<img alt="score background" src="../img/forscore.png" id="score-bg" />
<p id="score-text">0</p>
<div class="popup" id="menu-popup">
	<p>Go back to main menu?<br>
	Your progress will be lost.</p>
	<button id="yes" onclick="window.location.href = '../start';"></button>
	<button id="no"></button>
</div>
<div class="popup" id="score-popup"></div>
<div id="cards">
<?php for ($i = 0; $i <12; $i++) : ?>
<div id="card<?=$i?>" class="card"></div>
<?php endfor; ?>
</div>
</div>
<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
