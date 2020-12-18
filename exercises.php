<?php include 'head.php' ?>

<div class="container my-5">
  <h2>Exercises</h2>
  <p>Theese exercises are ment to practise web-development</p>
  <div class="row">
    <div class="col-lg-6 col-md-12 mt-5">
      <div class="container p-3 bg-white roundCorners dropShadow">
        <div class="imgContainer roundCorners">
          <img src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-rockpaper.jpg?itok=4WUMt1oc" class="img-fluid" alt="">
        </div>
        <h3 class="mt-3">Rock, Paper, Scissors</h3>
        <p>This is a simple game of Rock, Paper, Scissors. <br> Try your luck against a computer. </p>
        <a href="components/exercises/rockPaperScissors/rps.php"><button type="button" name="button">Try it out</button></a>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 mt-5">
      <div class="container p-3 bg-white roundCorners dropShadow">
        <div class="imgContainer roundCorners">
          <img src="https://cdn.dribbble.com/users/1054642/screenshots/7635203/media/006d6821c260c719f8baeeeefc3cab5d.gif" class="img-fluid" alt="" style="transform:translateY(-50px);">
        </div>
        <h3 class="mt-3">Light/Dark mode</h3>
        <p>Changes the style of the site from light or dark mode depending on what the user wants.</p>
        <a href="components/exercises/lightDarkMode/ldm.php"><button type="button" name="button">Try it out</button></a>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 mt-5">
      <div class="container p-3 bg-white roundCorners dropShadow">
        <div class="imgContainer roundCorners">
          <img src="https://www.eatwell101.com/wp-content/uploads/2012/02/A-Beginner%E2%80%99s-Shopping-List.jpg" class="img-fluid" alt="">
        </div>
        <h3 class="mt-3">Shopping list</h3>
        <p>Calculates when you should go to sleep based on when you'd like to wake up. </p>
        <a href="components/exercises/shoppinglist/shopping.php"><button type="button" name="button">Try it out</button></a>
      </div>
    </div>
  </div>
</div>
<?php include ($_SERVER['DOCUMENT_ROOT']."/components/loader.php"); ?>
