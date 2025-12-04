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
        computerMove='stone';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    }
    else{
        computerMove='scissors';
    }

    if (playerMove=='stone'){
        if (computerMove=='paper'){
            result='You lose';
        }
        else if (computerMove=='scissors'){
            result='You win';
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
            result='You lose';
        }
        else{
            result='You win';
        }
    }
    else{
        if (computerMove=='paper'){
            result='You win';
        }
        else if (computerMove=='scissors'){
            result='Tie';
        }
        else{
            result='You lose';
        }
    }
    if (result=='You win'){
        score.win++;
    }
    else if (result=='You lose'){
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