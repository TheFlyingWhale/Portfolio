<script type="text/javascript" src="cookie.js"></script>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<body class="color-bg">
  <div class="container">
    <div class="row mt-5">
      <div class="col-6">
        <h2 class="color-fg">Home-Page</h2>
        <p class="color-fg">Dette er en test side for sass og bootstrap</p>
      </div>
      <div class="col-6">
        <h2 class="color-fg">Ny col</h2>
        <p class="color-fg">Mere tekst for en rar grunn</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button type="button" class="color-neg-bg" onclick="main()"> <span class="color-neg-fg">Flipp</span></button>
      </div>
      <div class="col-6">
        <a href="page.php">
          <button type="button" name="button" class="color-neg-bg"> <span class="color-neg-fg">Other Page</span> </button>
        </a>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-8">
        <img src="https://olewalberg.com/content/wallpapers/icySpikes.jpg" alt="" class="img-fluid dropShadow roundCorners">
      </div>
    </div>
  </div>
</body>
<?php include 'loader.php' ?>
<script type="text/javascript" src="colorController.js"></script>
