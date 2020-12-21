
<link type='text/css' rel='stylesheet' href='objects.css'>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<script type="text/javascript" src="objects.js"></script>
<!--?php include($_SERVER['DOCUMENT_ROOT']."/components/loader.php"); ?-->
<body onload="main()">
  <div class="container mt-5">
    <div class="row">
      <h2>Car repair shop</h2>
    </div>
    <div class="row">
      <div class="col-6 p-0">
        <h3>Description</h3>
        <p>In this exercise I'm working with car repair shops to improve my knowlegde of objects. The repair shop have different prices for different repairs. The repair shop should be able to list the cars in the shop and the cars on the waitning list. There are going to be customers who needs their cars repaired.</p>
        <br>
        <h3>Requirements</h3>
          <ul>
            <li>Repairshops should be treated as objects.</li>
            <li>There should be more than one repairshop, all having different prices.</li>
            <li>Customers should be treated as objects.</li>
            <li>Customers should have an preferred price-range to repairing their cars.</li>
            <li>Customers should alse have an preffered waiting time.</li>
            <li>Cars should be treated as objects</li>
          </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <button type="button" name="button" onclick="logCar()">Log Car</button>
      </div>
      <div class="col-6">
        <div id="garageContainer">

        </div>
      </div>
    </div>
  </div>

</body>
