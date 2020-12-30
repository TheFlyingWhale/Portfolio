const primaryColor = 'rgb(250,250,250)'; //TintWhite
const primaryPureColor = 'rgb(255,255,255)'; //PureWhite - Used on elements above TintWhite background
const secondaryColor = 'rgb(21,21,21)'; //TintBlack
const secoundaryMidColor = 'rgb(35,35,35)'; //MidBlack - Used on elements above TintBlack bacground
let inverted = 'false';
console.log(getCookie('bg-invert'));


let bgArr = []; //Background Elements
let bgNegArr = []; //Negative Background Elements
let mgArr = []; //Middleground Elements
let fgArr = []; //Foreground Elements
let fgNegArr = []; //Negative Foreground Elements

flipColors = () =>{
  //Flipps all the colors to invert(dark bg/light fg)
  if(getCookie('bg-invert') == 'false'){
    console.log('Flip to invert');
    for(let i = 0; i < bgArr.length; i++){
      bgArr[i].style.backgroundColor = secondaryColor;
    }
    for(let i = 0; i < bgNegArr.length; i++){
      bgNegArr[i].style.backgroundColor = primaryColor;
    }
    for(let i = 0; i < mgArr.length; i++){
      mgArr[i].style.backgroundColor = secoundaryMidColor;
    }
    for(let i = 0; i < fgArr.length; i++){
      fgArr[i].style.color = primaryColor;
    }
    for(let i = 0; i < fgNegArr.length; i++){
      fgNegArr[i].style.color = secondaryColor;
    }
  }
  //Flipps all the colors to normal(light bg/dark fg)
  else if(getCookie('bg-invert') == 'true'){
    console.log('Flip to normal');
    for(let i = 0; i < bgArr.length; i++){
      bgArr[i].style.backgroundColor = primaryColor;
    }
    for(let i = 0; i < bgNegArr.length; i++){
      bgNegArr[i].style.backgroundColor = secondaryColor;
    }
    for(let i = 0; i < mgArr.length; i++){
      mgArr[i].style.backgroundColor = primaryPureColor;
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
  const middlegroundElements = document.getElementsByClassName('color-mg');
  for(let i = 0; i < middlegroundElements.length; i++){
    mgArr.push(middlegroundElements[i]);
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
console.log('derp');
