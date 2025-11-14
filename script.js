
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
let playerDisplay = document.getElementById("playerDisplay")
let computerDisplay = document.getElementById("computerDisplay")
let resultDisplay = document.getElementById("resultDisplay")

let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")

let playerPoints = 0
let computerPoints = 0
 computerScore.textContent = `Computer Score: ${computerPoints}`



const choices = ["Rock", "Paper", "Scissors"]



rock.addEventListener("click", function rocker(){
    let playerChoice = "Rock"
    playerDisplay.textContent = `Player: ${playerChoice}`

    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]

    console.log(randomIndex)
    computerDisplay.textContent = `Computer: ${computerChoice}`

    if (playerChoice === computerChoice){
        resultDisplay.textContent = "It's a Tie Buddy"
    }else if(playerChoice === "Rock" && computerChoice === "Paper"){
        resultDisplay.textContent = "Better luck next time Broski"
         computerScore.textContent = `Computer Score: ${computerPoints++}`
    }else if(playerChoice === "Rock" && computerChoice === "Scissors"){
        resultDisplay.textContent = "Hehe I Win"
         playerScore.textContent = `Player Score: ${playerPoints++}`
    }
})

paper.addEventListener("click", function(){
    let playerChoice = "Paper"
    playerDisplay.textContent = `Player: ${playerChoice}`

    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]

    console.log(randomIndex)
    computerDisplay.textContent = `Computer: ${computerChoice}`

    if (playerChoice === computerChoice){
        resultDisplay.textContent = "It's a Tie Buddy"
        }else if(playerChoice === "Paper" && computerChoice === "Rock"){
            resultDisplay.textContent = "Hehe I Win"
            playerScore.textContent = `Player Score: ${playerPoints++}`

        }else if(playerChoice === "Paper" && computerChoice === "Scissors"){
            resultDisplay.textContent = "Damn It I'll beat u next time Clanker"
            computerScore.textContent = `Computer Score: ${computerPoints++}`

        }
})


scissors.addEventListener("click", function(){
    let playerChoice = "Scissors"
    playerDisplay.textContent = `Player: ${playerChoice}`
    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]


    computerDisplay.textContent =`Computer:${computerChoice}`

        if (playerChoice === computerChoice){
            resultDisplay.textContent = "It's a Tie Buddy"
            }else if(playerChoice === "Scissors" && computerChoice === "Rock"){
                resultDisplay.textContent = "Damnit Computer"
                computerScore.textContent = `Computer Score: ${computerPoints++}`


            }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
                resultDisplay.textContent = "Take This"
                playerScore.textContent = `Player Score: ${playerPoints++}`

            }
})








