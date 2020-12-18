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
          <img src="https://www.cdc.gov/sleep/images/featured-topics/WomanGettingSleep-medium.jpg" class="img-fluid" alt="">
        </div>
        <h3 class="mt-3">Sleep debt calculator</h3>
        <p>Calculates when you should go to sleep based on when you'd like to wake up. </p>
        <a href="components/exercises/rockPaperScissors/rps.php"><button type="button" name="button">Try it out</button></a>
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
