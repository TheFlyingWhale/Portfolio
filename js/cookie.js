/**
 * cookie.js is responsible for handeling cookies
 * display of the cookie warner is being handeled by loader.js
 */

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/*
  Checks if the cookieAccept exists, if not it makes one.
*/
if (getCookie('cookieAccept')) {
  //console.log('Here is a cookie');
} else {
  //console.log('No cookie here');
  setCookie('cookieAccept', 'false');
}

//Removes the cookieWarner when button clicked
$('#acceptCookie').click(function () {
  //Assign the cookieWarning element
  const coWar = document.getElementById('cookieWarning');
  setCookie('cookieAccept', 'true');
  $('#cookieWarningElement').animate({height: '88px'});
  $('#cookieWarning').animate({ bottom: '-150px' }, function(){
    $(coWar).css('display', 'none');
  });
})

//Enables the user to see more information about the cookies
if (document.getElementById('cookieInfo')) {
  //Assign the cookieInfo button to cooInfBut
  const cooInfBut = document.getElementById('cookieInfo');
  //Assign the cookieWarning 'box' to cooInfCon
  const cooInfCon = document.getElementById('cookieWarningElement');
  //Assign the cookieWarning information
  const cooWarInf = document.getElementById('cookieWarnerInfo');
  //Keeps track of what stage the cooInfCon is in
  let toggleState = 0;

  //Toggle the display
  const animateDisplay = () => {
    if(toggleState === 0){
      $(cooInfCon).animate({height: '150px'}, 300);
      $(cooWarInf).animate({height: '48px'}, 300);
      toggleState = 1;
    }else{
      $(cooInfCon).animate({height: '88px'}, 300);
      $(cooWarInf).animate({height: '0px'}, 300);
      toggleState = 0;
    }
  }

  cooInfBut.addEventListener('click', animateDisplay);
}