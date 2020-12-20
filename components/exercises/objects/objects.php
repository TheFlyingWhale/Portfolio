<script type="text/javascript" src="objects.js"></script>
<link type='text/css' rel='stylesheet' href='objects.css'>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<?php include($_SERVER['DOCUMENT_ROOT']."/components/loader.php"); ?>
<div class="container mt-5">
  <div class="row">
    <h2>This Test</h2>
  </div>
  <div class="row">
    <p>This exercise is meant to experiment with this to see how I can use it.</p>
  </div>
  <div class="row">
    <div class="col-6">
      <h3>This returns:</h3>
      <p id="return">Nothing yet.</p>
    </div>
    <div class="col-6">
      <button type="button" name="button" onclick="returnThis();"></button>
    </div>
  </div>
</div>
