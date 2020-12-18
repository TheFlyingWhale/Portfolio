const dark = 'rgb(21, 21, 21)';
const light = 'rgb(250, 250, 250)';

let bgColor = 'rgb(250, 250, 250)';/*getComputedStyle(document.body).getPropertyValue('background-color')*/;
let currentMode;

function checkCurrentMode(){
  if(bgColor == 'rgb(250, 250, 250)'){
    currentMode = true;
    console.log('Its currently light mode!');
  }else if(bgColor == 'rgb(21, 21, 21)'){
    currentMode = false;
    console.log('Its currently dark mode!');
  }
}

function changeColor(){
  if(currentMode){
    let headers = document.getElementsByTagName('h2');
    let paragraphs = document.getElementsByTagName('p');
    let buttons = document.getElementsByTagName('button');
    document.body.style.backgroundColor = dark;

    for(let i = 0; i < headers.length; i++){
      headers[i].style.color = light;
    }
    for(let i = 0; i < paragraphs.length; i++){
      paragraphs[i].style.color = light;
    }
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.color = dark;
      buttons[i].style.backgroundColor = light;
    }

    bgColor = dark;
    console.log('Changed theme to dark');
  }else if(currentMode != true){
    let headers = document.getElementsByTagName('h2');
    let paragraphs = document.getElementsByTagName('p');
    let buttons = document.getElementsByTagName('button');
    document.body.style.backgroundColor = light;

    for(let i = 0; i < headers.length; i++){
      headers[i].style.color = dark;
    }
    for(let i = 0; i < paragraphs.length; i++){
      paragraphs[i].style.color = dark;
    }
    for(let i = 0; i < buttons.length; i++){
      buttons[i].style.color = light;
      buttons[i].style.backgroundColor = dark;
    }

    bgColor = light;
    console.log('Changed theme to light');
  }
}

function invertColor(){
  checkCurrentMode();
  console.log(currentMode);
  changeColor();
}
