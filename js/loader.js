/**
 * loader.js is responsibole for scripts running on and after page load
 */


 //Applies after the window is done loading
$(window).on("load", function () {
    $(".loader-container").fadeOut("slow", function () {
        $(".loader-container").removeClass("d-flex");
    });

    //Checks to see if the DOM contains greeterContainer
    if(document.getElementById('greeterContainer')){
        applyGreeterAnimation();
    }
});

const applyGreeterAnimation = () => {
    console.log('applyGreeterAnimation');
    //man theese are some bad class-names
    document.getElementById('greeterH1').classList.add('welcomeText');
    document.getElementById('greeterH3').classList.add('textFade');
    document.getElementById('greeterP').classList.add('indexGreeterBreadText');

}