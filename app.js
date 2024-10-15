let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const GencompChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = GencompChoice();

    if(userChoice === compChoice){
        //draw
        drawGame();
    } else {
        //check for win
        if((userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")){
            userScore++;
            msg.innerText = `you win! Your ${userChoice} beats ${compChoice}.`
            msg.style.backgroundColor = "green";
            userScorePara.innerText = userScore;
            } else {
                compScore++;
                msg.innerText = `You lost. ${compChoice} beats your ${userChoice}.`;
                msg.style.backgroundColor = "red";
                compScorePara.innerText = compScore;
                }

    }

}

const drawGame = () => {
    console.log("its a draw");
    msg.innerText = "Its a Draw. Play again!!"
    msg.style.backgroundColor = "#e29578"
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choices was clicked", userChoice);
        playGame(userChoice);
    })
})
