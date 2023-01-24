document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'pink',
            img: 'assets/images/Pink.png'
        },
        {
            name: 'pink',
            img: 'assets/images/Pink.png'
        },
        {
            name: 'teal',
            img: 'assets/images/teal.png'
        },
        {
            name: 'teal',
            img: 'assets/images/teal.png'
        },
        {
            name: 'blue',
            img: 'assets/images/blue.png'
        },
        {
            name: 'blue',
            img: 'assets/images/blue.png'
        },
        {
            name: 'purple',
            img: 'assets/images/purple.png'
        },
        {
            name: 'purple',
            img: 'assets/images/purple.png'
        },
        {
            name: 'yellow',
            img: 'assets/images/yellow.png'
        },
        {
            name: 'yellow',
            img: 'assets/images/yellow.png'
        },
        {
            name: 'orange',
            img: 'assets/images/Orange.png'
        },
        {
            name: 'orange',
            img: 'assets/images/Orange.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/card-back.png');
            card.setAttribute('data-id', i);
            //listen for click and invoke a flipcard function
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

 //check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'assets/images/white-empty.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/white-empty.png');
        cardsWon.push(cardsChosen);
    } else {
        alert('Not a match');
        cards[optionOneId].setAttribute('src', 'assets/images/card-back.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/card-back.png');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You've matched all of the cards!"
    }
}


 //flip cards
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosen.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}


createBoard();

})