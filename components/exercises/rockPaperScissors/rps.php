<script type="text/javascript" src="rps.js"></script>
<link type='text/css' rel='stylesheet' href='rps.css'>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<div class="container mt-5">
  <div class="row mt-5">
    <h2 id="title">Rock, Paper or Scissors?</h2>
  </div>
  <div class="row">
    <p>
      This is a simple game of rock, paper, scissors.
      <br>
      Choose your hand and see if you'll beat the computer!
    </p>
  </div>
  <div class="row text-center">
    <div class="col-6">
      <h3>You</h3>
      <div id="playerChoice" class="d-flex align-items-center justify-content-center roundCorners">
        <h2 id="playerHand"></h2>
      </div>
    </div>
    <div class="col-6">
      <h3>Opponent</h3>
      <div id="cpChoice" class="d-flex align-items-center justify-content-center roundCorners">
        <h2 id="cpHand"></h2>
      </div>
    </div>
  </div>
  <div class="row mt-4 d-flex justify-content-center">
    <h3>Choose your hand</h3>
  </div>
  <div class="row mt-2">
    <div class="col-4 d-flex justify-content-center">
      <button type="button" name="button" onclick="roll('Rock')">Rock</button>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <button type="button" name="button" onclick="roll('Paper')" >Paper</button>
    </div>
    <div class="col-4 d-flex justify-content-center">
      <button type="button" name="button" onclick="roll('Scissors')" >Scissors</button>
    </div>
  </div>
</div>
<?php include ($_SERVER['DOCUMENT_ROOT']."/components/loader.php"); ?>
