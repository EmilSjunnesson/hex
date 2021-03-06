<?php $title='About Hex'; include(__DIR__ . '/../incl/header.php'); ?>

<div id="info">
	<a id="back" href="../start">&#10094; Back to main menu</a>
	<header>
		<img alt="hex" src="../img/hex.png">
	</header>
	<h1>About Hex</h1>
	<p>Hex is a browser card game created by <a target="_blank" href="http://www.student.bth.se/~emsf14/javascript/me/">Emil Sjunnesson</a>. The game is mostly coded in 
	JavaScript, but there is some PHP thrown in as well. Hex is based on an Android app by the 
	<a target="_blank" href="https://github.com/EmilSjunnesson/CardTest">same name</a> created in 2013. The 
	app was created in a mobile development course and made by a team Emil was part of. The app in turn is 
	based on the analog card game <a target="_blank" href="http://en.wikipedia.org/wiki/Set_%28game%29">SET</a>. 
	You can read more about the game under "Rules", accessed from the main menu.</p>
	
	<h2>Competition</h2>
	<p><strong><a target="_blank" href="http://www.setgame.com/set">SET</a></strong><br>
	Hex’s main competitor if of course the original card game SET. Because Hex is digital and SET is not, you 
	can add loads of functionality. For example every deal has at least one “set”. That is not certain when 
	you play SET. Hex also stores your score in a high-score-database. Hex also has timers, combo points and 
	hints. SET does not.</p>
	<p><strong><a target="_blank" href="http://www.nytimes.com/crosswords/game/set/?page=set&difficulty=&_r=0">New York Times SET</a></strong><br>
	New York Times has a version of set on their website. It plays exactly the same way as the original but 
	it digital. Their version seems a bit buggy and “jumps” around when you press the cards. My version does 
	not. The NYT one also lacks high-score, timers, combo points and hints. It retains the same style as the 
	original also. Hex has a more fun theme, but that is of course subjective. The NYT SET does however have 
	one functionally that Hex lacks, the ability to choose difficulty.</p>
	
	<h2>Further development</h2>
	<p>At the moment Hex is a solid foundation to build on. In the future it's possible to support local and 
	online multiplayer. Different difficulties and other game modes could also be added. But the most 
	important addition would be an interactive tutorial because the game can be a bit hard to learn.</p>
	
	<h2>Source code</h2>
	<p>The Hex source code is available at <a target="_blank" href="https://github.com/EmilSjunnesson/hex">Github</a>. 
	Hex uses, LESS modernizer, jQuery and jQuery UI, but they are all included in the package, no further 
	downloads required. Feel free to download the code and fiddle around. Most of the code is documented 
	with small comments.</p>
	</div>

<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>