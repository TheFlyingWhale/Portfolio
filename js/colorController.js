let primaryColor = 'white';
let secondaryColor = 'black';
let inverted = 'false';
console.log(getCookie('bg-invert'));

let bgArr = [];
let bgNegArr = [];
let fgArr = [];
let fgNegArr = [];

flipColors = () =>{
  if(getCookie('bg-invert') == 'false'){
    console.log('Flip to invert');
    for(let i = 0; i < bgArr.length; i++){
      bgArr[i].style.backgroundColor = secondaryColor;
    }
    for(let i = 0; i < bgNegArr.length; i++){
      bgNegArr[i].style.backgroundColor = primaryColor;
    }
    for(let i = 0; i < fgArr.length; i++){
      fgArr[i].style.color = primaryColor;
    }
    for(let i = 0; i < fgNegArr.length; i++){
      fgNegArr[i].style.color = secondaryColor;
    }
  }else if(getCookie('bg-invert') == 'true'){
    console.log('Flip to normal');
    for(let i = 0; i < bgArr.length; i++){
      bgArr[i].style.backgroundColor = primaryColor;
    }
    for(let i = 0; i < bgNegArr.length; i++){
      bgNegArr[i].style.backgroundColor = secondaryColor;
    }
    for(let i = 0; i < fgArr.length; i++){
      fgArr[i].style.color = secondaryColor;
    }
    for(let i = 0; i < fgNegArr.length; i++){
      fgNegArr[i].style.color = primaryColor;
    }
  }
}

getAllElements = () =>{
  const backgroundElements = document.getElementsByClassName('color-bg');
  for(let i = 0; i < backgroundElements.length; i++){
    bgArr.push(backgroundElements[i]);
  }
  const negativeBackgroundElements = document.getElementsByClassName('color-neg-bg');
  for(let i = 0; i < negativeBackgroundElements.length; i++){
    bgNegArr.push(negativeBackgroundElements[i]);
  }
  const foregroundElements = document.getElementsByClassName('color-fg');
  for(let i = 0; i < foregroundElements.length; i++){
    fgArr.push(foregroundElements[i]);
  }
  const negativeForegroundElements = document.getElementsByClassName('color-neg-fg');
  for(let i = 0; i < negativeForegroundElements.length; i++){
    fgNegArr.push(negativeForegroundElements[i]);
  }
  //console.log(backgroundElements);
  //console.log(negativeBackgroundElements);
}

/*
checkColorFlip = () => {
  //console.log("Cookie: "+getCookie('bg-invert'));
  //console.log("Inverted: " +inverted);

  if(getCookie('bg-invert')==inverted){
    //console.log('No flipp');
  }else if(getCookie('bg-invert') != inverted){
    flipColors();
    //console.log('We flipped');
  }
}
*/
getAllElements();
flipColors();
//document.getElementById('test').innerHTML = 'loool';
console.log("derpI'll load!");
main = () => {
  if(getCookie('bg-invert') == 'false'){
    setCookie('bg-invert','true');
  }else{
    setCookie('bg-invert','false');
  }
  console.log(getCookie('bg-invert'));
  flipColors();
}
