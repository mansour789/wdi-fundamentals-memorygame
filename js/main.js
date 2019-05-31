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

	if (cardsInPlay[0] === cardsInPlay[1]) {
	 	 //console.log
	 	 alert("You found a match!");
	} else {
	 	//console.log
	 	alert("Sorry, try again.");
	}
}

function flipCard() {

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);


	if (cardsInPlay.length > 1){
			if (cardsInPlay[0] === cardsInPlay[1]){
				checkForMath();
				//alert('You found a match!');
			}else {
				//alert(' Sorry, try again.');
			checkForMath();
			}
	}

	cardsInPlay.push(cards[cardId].rank);
	
}
function createBoard() {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();


