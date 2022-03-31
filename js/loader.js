/**
 * loader.js is responsibole for scripts running on and after page load
 */


//Applies after the window is done loading
$(window).on("load", function () {
    $(".loader-container").fadeOut("slow", function () {
        $(".loader-container").removeClass("d-flex");
    });

    //Checks to see if the DOM contains greeterContainer
    if (document.getElementById('greeterContainer')) {
        applyGreeterAnimation();
    }

    //<!-- Disabled because of bugs -->
    //Checks to see if the DOM contains cookieWarning
    // if(document.getElementById('cookieWarning')){
    //     displayCookieWarner();
    // }
});


//Applies the greeter style animations
const applyGreeterAnimation = () => {
    //man theese are some bad class-names
    document.getElementById('greeterH1').classList.add('welcomeText');
    document.getElementById('greeterH3').classList.add('textFade');
    document.getElementById('greeterP').classList.add('indexGreeterBreadText');
}

//Displayes the cookiewarner
const displayCookieWarner = () => {
    setTimeout(function () {
        if (getCookie('cookieAccept') && getCookie('cookieAccept') === 'false') {
            $(document).ready(function () {
                $('#cookieWarning').css('display', 'block');
                $('#cookieWarning').animate({ bottom: '0px' }, 1000);
            });
        }
    }, 3000);
}