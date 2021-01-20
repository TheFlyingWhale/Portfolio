/**
 * cookie.js is responsible for handeling cookies
 * display of the cookie warner is being handeled by loader.js
 */

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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
if(getCookie('cookieAccept')){
  //console.log('Here is a cookie');
}else{
  //console.log('No cookie here');
  setCookie('cookieAccept', 'false');
}

//Displays the cookieWarner after given time
/*
setTimeout(function(){
  if(getCookie('cookieAccept') && getCookie('cookieAccept') === 'false'){
    $(document).ready(function(){
      $('#cookieWarning').animate({bottom:'0px'},1000);
    });
  }
},2500);
*/
//Removes the cookieWarner when button clicked
$('#acceptCookie').click(function(){
  setCookie('cookieAccept','true');
  $('#cookieWarning').animate({bottom:'-150px'});
})
