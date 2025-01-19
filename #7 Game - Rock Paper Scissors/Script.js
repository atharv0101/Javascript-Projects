let userscore = 0;
let compscore = 0;
let options = ["Rock", "Paper", "Scissors"];
let userscorecount = document.querySelector("#user-score");
let compscorecount = document.querySelector("#comp-score");

const gencompchoice = () => {
let compchoicenumber = Math.floor(Math.random() * 3);
return compchoicenumber;
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
});

const drawgame = () => {
    // console.log("It's a tie! Nobody Wins!");
}

const msg = document.querySelector("#message");

const playgame = (userchoice) => {
    let compchoice = options[gencompchoice()];
    // console.log("user chose", userchoice);
    // console.log("computer chose",compchoice);
    let userwin = true;
    
    if(userchoice === compchoice){
        drawgame();
        msg.style.backgroundColor = "rgb(182, 85, 101)";
        msg.innerText = "Game draw, Play again!";
        return;
    }

    else if(userchoice === "Rock"){
        userwin = compchoice === "Paper" ? false : true;
    }

    else if(userchoice === "Paper"){
    userwin = compchoice === "Scissors" ? false : true; 
    }

    else if(userchoice === "Scissors"){
        userwin = compchoice === "Rock" ? false : true; 
    }
    lightchoice(compchoice, userwin? "win" : "lose");
    showwinner(userwin, userchoice, compchoice);
};

    const lightchoice = (compchoice, result) => {
        // Remove existing highlights
        document.querySelectorAll(".choice").forEach(choice => {
            choice.classList.remove("highlight", "highlight-win", "highlight-lose");
        });
    
        // Determine highlight color based on result
        let highlightClass = result === "win" ? "highlight-win" : (result === "lose" ? "highlight-lose" : "highlight-draw");
        
        // Highlight the current choice
        let element = document.querySelector(`#${compchoice}`);
        element.classList.add(highlightClass);
    
        console.log(`Light up ${compchoice.toLowerCase()}`);
    
        // Remove highlight after animation ends
        setTimeout(() => {
            element.classList.remove(highlightClass);
        }, 1000); // Duration matches the CSS animation duration
    };
    


const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin === true){
        userscore++;
        userscorecount.innerText = userscore;
        // console.log('You Win!');
        msg.style.backgroundColor = "green";
        msg.textContent = `You Win! Your ${userchoice} beats ${compchoice}`; 
        
    }

    else{
        compscore++;
        compscorecount.innerText = compscore;
        // console.log("You Lose!");
        msg.style.backgroundColor = "red";
        msg.textContent = `You Lose. ${compchoice} beats Your ${userchoice}`;
    }
    return;

}












