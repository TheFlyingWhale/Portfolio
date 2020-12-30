//Scrolls the view to desired section of the site
//based on link clicked in the nav
function goToId(element){
  var test = element;
  console.log(test.id);
  $('html, body').animate({
        scrollTop: $(test).offset().top
    }, 0);
};

$(window).on("load",function(){
  $(".loader-container").fadeOut("slow", function(){
    $(".loader-container").removeClass("d-flex");
  });
});

/*
$body = $("body");

$(document).on({
  ajaxStart: function(){$body.addClass("loading");},
  ajaxStop: function(){$body.removeClass("loading");}
});

*/

/*
This code was an attempt at creating a loader using only
javascript. But since I couldn't find helping resources
I ended up using jQuery insted.

let count;
function loader(){
  console.log('Lets load this shit.');
  let elem = document.getElementsByTagName("img");
  let clo = elem[1].cloneNode(true);
  console.log(typeof elem);

  document.getElementById("app").insertAdjacentElement("beforeend", clo);
};
*/
