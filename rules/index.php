<?php $title='Rules'; include(__DIR__ . '/../incl/header.php'); ?>

<div id="rules">
	<h1>Rules</h1>
	<div>
		<h2>Basics</h2>
		<p>Hex is based on the classic game <a target="_blank" href="http://en.wikipedia.org/wiki/Set_%28game%29">Set</a>
		and it follows the same basic rules. But Hex has the added twist of combos, timers, hints and a brand 
		new style.</p>
		<p>The main goal of the game is to collect “sets” of three cards. There are a total of 81 cards in 
		the deck, of these cards 12 are laid out on the table. When a set is collected those cards are 
		discarded and three new cards from the deck is drawn. The games logic makes sure there is always at 
		least one set among the 12 cards on the table. When there is no sets left in the deck the game is over.</p>
		
		<h2>What is a set?</h2>
		<p>A set consists of three cards in which each of the cards’ features, looked at one-by-one, are the 
		same on each card, or, are different on each card. All of the features must separately satisfy this 
		rule. In other words: shape must be the same on all three cards, or different on each of the three 
		cards; color must be either the same on all three cards, or different on each of the three, and 
		so on.</p>
		<figure>
			<img alt="card 1" src="../img/cards/card1.png">
			<img alt="card 2" src="../img/cards/card13.png">
			<img alt="card 3" src="../img/cards/card25.png">
			<figcaption>The above example <em>is</em> a set because the cards have the same color and 
			shading. And all have different shapes and numbers.</figcaption>
		</figure>
		<p>A quick way to see if the cards make up a set is as follows: If two cards are the same and one 
		card is different in any feature, then it is <em>not</em> a set. To sum it all up: A set must be 
		either all the same <em>or</em> all different in each individual feature.</p>
		<figure>
			<img alt="card 1" src="../img/cards/card1.png">
			<img alt="card 2" src="../img/cards/card4.png">
			<img alt="card 3" src="../img/cards/card9.png">
			<figcaption>The above example is <em>not</em> a set because the first two cards are red 
			and the third is blue.</figcaption>
		</figure>
		
		<h2>Timers and hints</h2>
		<p>After you collected your first set a timer starts. The timer is represented by an hourglass in 
		the lower right corner. The faster you get another set the more points you get. The timer restarts 
		every time you collect a set.</p>
		<p>When the timer runs out you only get the standard 1000 points for a set and 
		shortly after that a hint is shown. After a while a second hint is shown. A card with a hint indicates 
		that that card is part of a set. When two hints is show you only need to find the third one on your 
		own.</p>
		<figure>
			<img alt="card 1" src="../img/highlight.png">
			<figcaption>This is shown above a card when you get a hint.</figcaption>
		</figure>
		
		<h2>Highscore</h2>
		<p>When you completed the game by collecting all the sets in the deck the points you earned are 
		shown on a new page. On the same screen you can see the time you took to complete the game. The 
		points and time are then calculated together and you get a final-score.</p>
		<p>If the final-score is high enough you earned a place on the high-score scoreboard. Just enter 
		your name and you are added to the list. You can access the high-score scoreboard from the main 
		menu.</p>
		
	</div>
	<a href="../start">Back to main menu</a>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../incl/footer.php'); ?>
