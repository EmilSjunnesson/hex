<?php $title='Game'; include(__DIR__ . '/../incl/header.php'); ?>
<input type="checkbox" name="un-mute" id="un-mute">
<label for="un-mute" class="unmute">
	<img src="http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg" alt="Mute_Icon.svg" title="Mute icon">
</label>
<label for="un-mute" class="mute">
	<img src="http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="Speaker_Icon.svg" title="Unmute/speaker icon">
</label>
<div id="board">
<div id="candles"></div>
<div id="cards">
<?php for ($i = 0; $i <12; $i++) : ?>
<div id="card<?=$i?>" class="card"></div>
<?php endfor; ?>
</div>
</div>
<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
