/* colorController.js
  This script handels the color-mode and have two modes, light and dark.
*/

const primaryColor = 'rgb(250,250,250)'; //TintWhite
const primaryPureColor = 'rgb(255,255,255)'; //PureWhite - Used on elements above TintWhite background
const secondaryColor = 'rgb(21,21,21)'; //TintBlack
const secoundaryMidColor = 'rgb(35,35,35)'; //MidBlack - Used on elements above TintBlack bacground


let bgArr = []; //Background Elements
let bgNegArr = []; //Negative Background Elements
let mgArr = []; //Middleground Elements
let fgArr = []; //Foreground Elements
let fgNegArr = []; //Negative Foreground Elements

/*  flipColors()
  Checks cookie for chosen color-mode and makes changes.
*/
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

/*  getAllElements()
  Collect all elements on the page with given class and
  pushes them into their repected array.
*/
getAllElements = () =>{
  //Collects elements with the color-bg class.
  const backgroundElements = document.getElementsByClassName('color-bg');
  for(let i = 0; i < backgroundElements.length; i++){
    bgArr.push(backgroundElements[i]);
  }
  //Collects elements with the color-mg class.
  const middlegroundElements = document.getElementsByClassName('color-mg');
  for(let i = 0; i < middlegroundElements.length; i++){
    mgArr.push(middlegroundElements[i]);
  }
  //Collects elements with the color-neg-bg class.
  const negativeBackgroundElements = document.getElementsByClassName('color-neg-bg');
  for(let i = 0; i < negativeBackgroundElements.length; i++){
    bgNegArr.push(negativeBackgroundElements[i]);
  }
  //Collects elements with the color-fg class.
  const foregroundElements = document.getElementsByClassName('color-fg');
  for(let i = 0; i < foregroundElements.length; i++){
    fgArr.push(foregroundElements[i]);
  }
  //Collects elements with the color-neg-fg class.
  const negativeForegroundElements = document.getElementsByClassName('color-neg-fg');
  for(let i = 0; i < negativeForegroundElements.length; i++){
    fgNegArr.push(negativeForegroundElements[i]);
  }
}

/*  userFlipColors()
  Lets the user change color-mode.
*/
userFlipColors = () => {
  if(getCookie('bg-invert') == 'false'){
    setCookie('bg-invert','true');
  }else{
    setCookie('bg-invert','false');
  }
  console.log(getCookie('bg-invert'));
  flipColors();
}


//Controlls animation of cmtCirc when cmdContainer is hovered
$(".cmtContainer").hover(function(){
  if(getCookie('bg-invert') === 'true'){
    $('.cmtCirc').css({border: 'solid 2px rgb(250,250,250)'});
    $('.cmtCirc').css({backgroundColor: 'rgb(21,21,21)'});
  }else{
    $('.cmtCirc').css({border: 'solid 2px rgb(21,21,21)'});
    $('.cmtCirc').css({backgroundColor: 'rgb(250,250,250)'});
  }
},
function(){
  if(getCookie('bg-invert') === 'true'){
    $('.cmtCirc').css({backgroundColor: 'rgb(250,250,250)'});
  }else{
    $('.cmtCirc').css({backgroundColor: 'rgb(21,21,21)'});
  }

});

//Controlls animation when cmdContainer is clicked
$('.cmtContainer').click(function(){
  userFlipColors();
  if(getCookie('bg-invert') === 'false'){
    $('.cmtCirc').animate({left: '30px'});
    $('.cmtCirc').css({border: 'solid 2px rgb(21,21,21)'});
    $('.cmtContainer').css({backgroundColor: 'rgb(250,250,250)'});
  }else{
    $('.cmtCirc').animate({left: '0px'});
    $('.cmtCirc').css({border: 'solid 2px rgb(250,250,250)'});
    $('.cmtContainer').css({backgroundColor: 'rgb(21,21,21)'});
  }
});

//Manipulates the stype of cmtCirc in cmtContainer
if(getCookie('bg-invert') === 'false'){
  $('.cmtContainer').css({backgroundColor: 'rgb(250,250,250)'});
  $('.cmtCirc').css({backgroundColor:'rgb(21,21,21)'});
  $('.cmtCirc').css({border: 'solid 2px rgb(21,21,21)'});
  $('.cmtCirc').css({left: '30px'});
}

getAllElements();
flipColors();
