
<link type='text/css' rel='stylesheet' href='objects.css'>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<?php include($_SERVER['DOCUMENT_ROOT']."/components/loader.php");?>
<script type="text/javascript" src="objects.js"></script>
<body onload="main()">
  <div class="container mt-5">
    <div class="row">
      <h2>Car repair shop</h2>
    </div>
    <div class="row">
      <div class="col-6 p-0">
        <h3>Description</h3>
        <p>In this exercise I'm working with car repair shops to improve my knowlegde of objects. The repair shop have different prices for different repairs. The repair shop should be able to list the cars in the shop and the cars on the waitning list. There are going to be customers who needs their cars repaired.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6 p-0">
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
      <div class="col-6">
        <h3>Current State</h3>
        <p>Currently all I've done is create some sort of object template for repairshop, person and car.
          <br> I use the template to generate random properties, append the properties to the page then repeat the process.
          <br> As you can see I'm appending three different repairshops, but its not three different objects. The code just change the objects properties before appending again.
          <br> I'm yet to figure out how I create three different objects, as you can see on the people and their cars.
          <br><b>Solution?</b> Rather than using a function to "generate" random objects use a method to set random properties.
          <br> That way I can clone an object than call a method to generate new properties to the cloned object.
        </p>
      </div>
    </div>
    <div class="my-5">
      <h2 class="mb-4">Repairshops</h2>
      <div class="bg-primary p-5 roundCorners">
        <div class="row">
          <div id="garageContainer0" class="col-4">
          </div>
          <div id="garageContainer1" class="col-4">
          </div>
          <div id="garageContainer2" class="col-4">
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <h2 class="mb-4">People</h2>
      <div class="bg-success p-5 roundCorners">
        <div class="row">
          <div id="personContainer0" class="col-4">
          </div>
          <div id="personContainer1" class="col-4">
          </div>
          <div id="personContainer2" class="col-4">
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <h2 class="mb-4">Cars</h2>
      <div class="bg-warning p-5 roundCorners">
        <div class="row">
          <div id="carContainer0" class="col-4">
          </div>
          <div id="carContainer1" class="col-4">
          </div>
          <div id="carContainer2" class="col-4">
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
