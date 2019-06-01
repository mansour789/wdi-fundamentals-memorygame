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

function checkForMath(){

	var winMessage = document.getElementById("textPlayAgain");

	if (cardsInPlay[0] === cardsInPlay[1]) {
	 	 //console.log
	 	// alert("You found a match!");
	 	 
	 	 winMessage.innerHTML = "You found a match!";
	 	 playAgain();
	} else {
	 	//console.log
	 	//alert("Sorry, try again.");
	 	winMessage.innerHTML = "Sorry, try again.";
	 	playAgain();
	}
};

function flipCard(cardId) {

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {
	checkForMath();
}

	
	
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

function playAgain(){

		var show = document.getElementById("playAgain");
		show.style.display = "block";

		document.getElementById("button").onclick = function(){
			show.style.display = "none";

		document.getElementById('game-board').innerHTML = "";
		createBoard();
		cardsInPlay = [];
		}
	

};



