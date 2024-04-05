let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawgame = () => {
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "darkblue";
} 

const showwinner = (userwin , userChoice , compChoice) => {
    if(userwin) {  
        userscore++; 
        userScorePara.innerText = userscore;   
        msg.innerText = `You win!Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++; 
        compScorePara.innerText = compscore;
        msg.innerText = `You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice =" ,userChoice);
    const compChoice = gencompchoice();
    console.log("comp choice =", compChoice);
    if(userChoice === compChoice) {
        drawgame();
    }else{
        let userwin = true;
        if(userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice==="paper") {
            userwin = compChoice === "scissors" ? false : true;
        }else{
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice)
    })
})