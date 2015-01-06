<?php $title='Game'; include(__DIR__ . '/../incl/header.php'); ?>
<div id="board">
<div id="cards">
<?php for ($i = 0; $i <12; $i++) : ?>
<div id="card<?=$i?>" class="card"></div>
<?php endfor; ?>
</div>
</div>
<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
