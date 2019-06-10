var cards = [
	{
		rank: "queen",
		usit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		usit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		usit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		usit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];




var cardsInPlay = [];
var tryTime = 0;
var scoreing = 0;
var sameCards = [];


function checkForMath(){


	var winMessage = document.getElementById("textPlayAgain");

	if (cardsInPlay[0] === cardsInPlay[1]) {
	 	 //console.log
	 	// alert("You found a match!");
	 	 tryTime += 1;
	 	 scoreing +=1;
	 	 score(tryTime, scoreing);
	 	 winMessage.innerHTML = "You found a match!";
	 	 playAgain();
	 	 sameCards = [];
	 	 
	} else {
	 	//console.log
	 	//alert("Sorry, try again.");
	 	tryTime += 1;
	 	score(tryTime, scoreing);
	 	winMessage.innerHTML = "Sorry, try again.";
	 	playAgain();
	 	sameCards = [];
	 	
	}

};



function flipCard(cardId) {

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	sameCards.push(cards[cardId].cardImage);


if (cardsInPlay.length === 2) {
	if (sameCards[0] === sameCards[1]) {

		
		wrong();
	}else {
		checkForMath();
	};

};

	
	
};

function createBoard() {

	 

	for (var i = 0; i < cards.length; i++){

		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}

};

createBoard();
score();


function playAgain(){

		var show = document.getElementById("playAgain");
		show.style.display = "block";


		document.getElementById("button").onclick = function(){
			show.style.display = "none";

			


		document.getElementById('game-board').innerHTML = "";
		createBoard();

		cardsInPlay = [];
		sameCards = [];
		shuffleArray(cards);

		}
	

};
function shuffleArray(cards){
	for( var i = cards.length - 1; i > 0 ; i--){
		const j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}
};


function score(tryTime, correctTime){
	document.getElementById("score").innerHTML = "Your correct guesses are <strong style='color:#F15B31;'> " + correctTime + "</strong> guess/es from total  of <strong style='color:#F15B31;'> " + tryTime + " </strong>guess/es."; 

};

function wrong(){

	

	var winMessage = document.getElementById("textPlayAgain");

	winMessage.innerHTML = "<strong style='color:#F15B31;'> You can't choose the same card twice! </strong>";
	
	
	playAgain();

	
}
 




