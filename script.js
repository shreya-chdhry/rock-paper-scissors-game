document.body.addEventListener('keydown',(event)=>{
    if (event.key=='r' || event.key=='R'){
        playGame('rock');
    }
    else if (event.key=='p' || event.key=='P'){
        playGame('paper');
    }
    else if (event.key=='s' || event.key=='S'){
        playGame('scissors');
    }
});  //game works with r/p/s/R/P/S keys too
const score=JSON.parse(localStorage.getItem('save-score')) || {
    win:0,
    lose:0,
    tie:0
};
document.querySelector('.game-score').innerHTML=`<p> Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie} </p>`;
function playGame(playerMove){
    let result='';
    let computerMove='';
    let randomNumber=Math.random();

    if (randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    }
    else{
        computerMove='scissors';
    }

    if (playerMove=='rock'){
        if (computerMove=='paper'){
            result='You lost';
        }
        else if (computerMove=='scissors'){
            result='You won';
        }
        else{
            result='Tie';
        }
    }
    else if (playerMove=='paper'){
        if (computerMove=='paper'){
            result='Tie';
        }
        else if (computerMove=='scissors'){
            result='You lost';
        }
        else{
            result='You won';
        }
    }
    else{
        if (computerMove=='paper'){
            result='You won';
        }
        else if (computerMove=='scissors'){
            result='Tie';
        }
        else{
            result='You lost';
        }
    }
    if (result=='You won'){
        score.win++;
    }
    else if (result=='You lost'){
        score.lose++;
    }
    else if (result=='Tie'){
        score.tie++;
    }
    document.querySelector('.game-result').innerHTML=`<p> Game result: ${result} </p>
    <p> You: <img class="move-image" src="images/${playerMove}.png"> Computer: <img class="move-image" src="images/${computerMove}.png"> `;
    document.querySelector('.game-score').innerHTML=`<p> Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie} </p>`;
    localStorage.setItem('save-score',JSON.stringify(score));
}
function resetScore(){
    score.win=0;
    score.lose=0;
    score.tie=0;
    document.querySelector('.game-score').innerHTML=`<p> Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie} </p>`;
    localStorage.setItem('save-score',JSON.stringify(score));
}
document.body.addEventListener('keydown',(event)=>{
    if (event.key=='Backspace'){
        document.querySelector('.reset-confirmation-msg').innerHTML='Do you want to reset the score Y/N? <button class="yes-button" >Yes</button> <button class="no-button" >No</button>';
        document.body.addEventListener('keydown',(event)=>{
            if (event.key=='Y' || event.key=='y' || event.key=='Enter'){
                resetScore();
                document.querySelector('.reset-confirmation-msg').innerHTML='';
            }
            else if (event.key=='N' || event.key=='n'){
                document.querySelector('.reset-confirmation-msg').innerHTML='';
            }
        })
    }
}); //Backspace to reset score and displays a confirmation msg when asked to reset