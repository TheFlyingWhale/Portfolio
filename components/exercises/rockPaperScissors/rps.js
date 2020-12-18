let aniCount;
let playerHand;

/*  cpRoll()
  Generates a number thats eighter 1,2 or 3.
  Returns rock, paper or scissors based on number.
*/
function cpRoll(){
  let cpNumber = Math.floor(Math.random()*3);
  if(cpNumber === 0){
    return 'Rock';
  }else if(cpNumber === 1){
    return 'Paper'
  }else{
    return 'Scissors';
  }
}

/*  checkResults(hand, cpHand)
  Compares playerhand(hand) and computerhand(cpHand)
  and returns if the player won or lost.
*/
function checkResults(hand,cpHand){
  console.log('Player:'+hand);
  console.log('Computer:'+cpHand);
  if(hand === cpHand){
    return 'Draw';
  }else if(hand === 'Rock' && cpHand === 'Paper'){
    return 'Loose';
  }else if(hand === 'Rock' && cpHand === 'Scissors'){
    return 'Win';
  }else if(hand === 'Paper' && cpHand === 'Scissors'){
    return 'Loose';
  }else if(hand === 'Paper' && cpHand === 'Rock'){
    return 'Win';
  }else if(hand === 'Scissors' && cpHand === 'Rock'){
    return 'Loose';
  }else if(hand === 'Scissors' && cpHand === 'Paper'){
    return 'Win';
  }else{
    console.log('checkResults() Something broke.');
  }
}

/* showResult(condition)
  Chandes site style to tell the player if they
  lost or won based on the result(condition).
*/
function showResult(condition){
  console.log('Condition:' + condition);
  if(condition === 'Draw'){
    document.getElementById('playerChoice').style.borderColor = 'orange';
    document.getElementById('playerHand').style.color = 'orange';
    document.getElementById('cpChoice').style.borderColor = 'orange';
    document.getElementById('cpHand').style.color = 'orange';
  }else if(condition === 'Win'){
    document.getElementById('playerChoice').style.borderColor = 'green';
    document.getElementById('playerHand').style.color = 'green';
    document.getElementById('cpChoice').style.borderColor = 'red';
    document.getElementById('cpHand').style.color = 'red';
  }else if(condition === 'Loose'){
    document.getElementById('playerChoice').style.borderColor = 'red';
    document.getElementById('playerHand').style.color = 'red';
    document.getElementById('cpChoice').style.borderColor = 'green';
    document.getElementById('cpHand').style.color = 'green';
  }else{
    console.log('showResult() Something broke.');
  }
}

/* preRollAnimation()
  Animates the beginning of the game.
*/
function preRollAnimation(){
  console.log('Counter:' + aniCount);
  if(aniCount === 0){
    document.getElementById('playerHand').innerHTML = 'Rock';
    document.getElementById('cpHand').innerHTML = 'Rock';
  }else if(aniCount === 1){
    document.getElementById('playerHand').innerHTML = 'Paper';
    document.getElementById('cpHand').innerHTML = 'Paper';
  }else if(aniCount === 2){
    document.getElementById('playerHand').innerHTML = 'Scissors';
    document.getElementById('cpHand').innerHTML = 'Scissors';
  }
  aniCount++;
}

/* preRoll()
  Times the preRollAnimation
*/
function preRoll(){
  aniCount = 0;
  setTimeout(preRollAnimation, 1000);
  setTimeout(preRollAnimation, 2000);
  setTimeout(preRollAnimation, 3000);
}

/*  setTesult()
  Trigger the display of results.
*/
function setResult(){
  let cpRolledHand = cpRoll();
  document.getElementById('playerHand').innerHTML = hand;
  document.getElementById('cpHand').innerHTML = cpRolledHand;
  showResult(checkResults(hand, cpRolledHand));
}

/*  clearBoard()
  Clears the board for another game.
*/
function clearBoard(){
  document.getElementById('playerHand').innerHTML = '';
  document.getElementById('cpHand').innerHTML = '';
  document.getElementById('playerChoice').style.borderColor = 'gray';
  document.getElementById('playerHand').style.color = 'black';
  document.getElementById('cpChoice').style.borderColor = 'gray';
  document.getElementById('cpHand').style.color = 'black';
}

/* roll(hand)
  Takes players hand(hand), initiates the game and how results.
*/
function roll(playerHand){
  console.clear();
  clearBoard();
  hand = playerHand;
  preRoll();
  setTimeout(setResult, 4000);
}
