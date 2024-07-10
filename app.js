let yourScore=0;
let computerScore=0;

const choices= document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const genCompChoice = () =>{
    const options =["rock","papers","scissors"];
    //rock paper scissors
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}
 

const drawGame = () =>{
    
    msg.innerText="game was draw. play again!";
    msg.style.backgroundColor = "#081b31";
 
}
const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;	
        msg.innerText=`you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
} 

//compare choices and declare winner
const playGame =(userChoice) =>{

//generate computer choice
const compChoice = genCompChoice();


if(userChoice==compChoice){
    //draw game
    drawGame();

}
else{
    let userWin= true;
    if(userChoice=="rock"){
            //scissors , paper
            userWin=compChoice==="paper" ? false : true;
    }else if(userChoice=="paper"){
        //rock , scissors
        userWin=compChoice="scissors" ? false : true;
    }else{
        //paper, rock
       userWin= compChoice="rock" ? false : true;
    }
showWinner(userWin,userChoice,compChoice);


}


};


choices.forEach=(choice) => { 
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
       
        playGame(userChoice);
        });

}