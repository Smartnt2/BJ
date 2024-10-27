let firstCard = 0
let secondCard = 0
let sum = 0
let numWins = 0
let numLosses = 0
let cards = []
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let winsEl = document.getElementById("wins-el")
let lossesEl = document.getElementById("losses-el")

document.getElementById("errorMessage").style.visibility = "hidden"

function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    winsEl.textContent = "Wins: " + numWins
    lossesEl.textContent = "Losses: " + numLosses
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent+=cards[i] + ", "
    }


    if(sum < 21) {
        messageEl.innerHTML = "Do you want to draw a new card? 🙂"
    } else if(sum == 21) {
        hasBlackjack = true
        messageEl.innerHTML = "Wohoo! You've got Blackjack! 🥳"
        numWins++
    } else {
        isAlive = false
        messageEl.innerHTML = "You're out of the game! 😭"
        numLosses++
    }
}


function newCard() {
    if(isAlive == false || hasBlackjack == true) {
        document.getElementById("errorMessage").style.visibility = "visible"
    } else {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


function startGame() {
    document.getElementById("errorMessage").style.visibility = "hidden"
    isAlive = true
    hasBlackjack = false
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber == 1) {
        return 11
    } else if(randomNumber > 9) {
        return 10
    } else {
        return randomNumber
    }
}
