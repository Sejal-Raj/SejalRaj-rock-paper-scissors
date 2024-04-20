let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");



const gencompchoice = () => {
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];
}



const drawgame = () => {
    msg.innerText = "game is draw";
    msg.style.backgroundColor = "#081b31";
}



const showin = (userwin) => {
    if(userwin){
        userscore++;
        user.innerText = userscore; 
        msg.innerText = "you win!";
        msg.style.backgroundColor = "blue";
    }else {
        compscore++;
        comp.innerText = compscore;
        msg.innerText = "you loss";
        msg.style.backgroundColor = "red";
    }
}



const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice === compchoice) {
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock") {
            //paper, scissors//
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper") {
            //rock, scissors//
            userwin = compchoice === "scissors" ? false : true;
        }else {
            //rock, paper//
            userwin = compchoice === "rock" ? false : true;
        }
        showin(userwin);
    }

}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});


