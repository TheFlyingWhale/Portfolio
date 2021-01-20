//Scrolls the view to desired section of the site
//based on link clicked in the nav
function goToId(element){
  var test = element;
  console.log(test.id);
  $('html, body').animate({
        scrollTop: $(test).offset().top
    }, 1000);
};
