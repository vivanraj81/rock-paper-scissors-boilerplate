let userImg = document.getElementById("selectedLogo")
let compImg = document.getElementById("compLogo")
let random;

function randomHand(){
    random = Math.floor(Math.random()*3)
    switch(random){
        case 1:
            compImg.setAttribute("src", "./assets/paper-hand.png");
            break
        case 2:
            compImg.setAttribute("src", "./assets/rock-hand.png");
            break
        case 3:
            compImg.setAttribute("src", "./assets/scissors-hand.png");
            break
        
    }
}
let paperBtn = document.getElementById("paper-logo")
let rockBtn = document.getElementById("rock-logo")
let scissorsBtn = document.getElementById("scissors-logo")
let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let userScoreVal = 0;
let compScoreVal = 0;
let result = document.getElementById("resultMatch");
let playAgain = document.getElementById("playAgain");

paperBtn.onclick = () =>{
    randomHand()
    userImg.setAttribute("src", "./assets/paper-hand.png");
    if (random == 2){
        userScoreVal++
        userScore.textContent = userScoreVal 
    }
    if (random == 3){
        compScoreVal++
        compScore.textContent = compScoreVal
    }
    endGame()
}

rockBtn.onclick = () =>{
    randomHand()
    userImg.setAttribute("src", "./assets/rock-hand.png");
    if (random == 3){
        userScoreVal++
        userScore.textContent = userScoreVal 
    }
    if (random == 1){
        compScoreVal++
        compScore.textContent = compScoreVal
    }
    endGame()
}

scissorsBtn.onclick = () =>{
    randomHand()
    userImg.setAttribute("src", "./assets/scissors-hand.png");
    if (random == 1){
        userScoreVal++
        userScore.textContent = userScoreVal 
    }
    if (random == 2){
        compScoreVal++
        compScore.textContent = compScoreVal
    }
    endGame()
}

function endGame(){
    if (userScoreVal == 3 || compScoreVal == 3){
        rockBtn.style.visibility = "hidden";
        paperBtn.style.visibility = "hidden";
        scissorsBtn.style.visibility = "hidden";
    }

    if (userScoreVal == 3){
        result.textContent = "You won the match!"
        playAgain.style.visibility = "visible";
    }

    if (compScoreVal ==3){
        result.textContent = "Computer won the match!"
        playAgain.style.visibility = "visible";
    }
}

playAgain.onclick = () =>{
    window.open("index.html", "_self")
}
