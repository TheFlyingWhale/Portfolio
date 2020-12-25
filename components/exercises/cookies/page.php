<link rel="stylesheet" href="style.css">
<script type="text/javascript" src="cookie.js"></script>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<body class="color-bg">
  <div class="container">
    <div class="row mt-5">
      <div class="col-6">
        <h2 class="color-fg">Other Page</h2>
        <p class="color-fg">Dette er side nummer 2</p>
        <button type="button" class="color-neg-bg" onclick="main()"><span class="color-neg-fg">Flipp</span></button>
      </div>
      <div class="col-6">
        <h2 class="color-fg">Col 4</h2>
        <p id="test" class="color-fg">Noe tekst er fint.</p>
        <a href="index.php">
          <button type="button" name="button" class="color-neg-bg"> <span class="color-neg-fg">Home Page</span> </button>
        </a>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-8">
        <img src="https://olewalberg.com/content/wallpapers/warmSpikes.jpg" alt="" class="img-fluid dropShadow roundCorners">
      </div>
    </div>
  </div>
</body>
<script type="text/javascript" src="colorController.js"></script>
