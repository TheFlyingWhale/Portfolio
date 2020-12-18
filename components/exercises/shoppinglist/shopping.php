<script type="text/javascript" src="shopping.js"></script>
<link type='text/css' rel='stylesheet' href='shopping.css'>
<?php include($_SERVER['DOCUMENT_ROOT'].'/head.php');?>
<?php include ($_SERVER['DOCUMENT_ROOT']."/components/loader.php"); ?>
<body onload="refreshDisplay()">
  <div class="container mt-5">
      <h2>Handle Liste</h2>
      <p>Dette er en enkel applikasjon som lar deg lage en handle liste. <br>
        Skriv in det du ønsker å legge til forså trykk den magiske knappen. <br>
        Skulle du ønske å slette noe kan du også gjøre det.</p>
      <div class="row">
        <div class="col-6">
          <!--p>Left Side</p-->
          <div class="row">
            <div class="col-12 py-3">
              <!--h3>Interaction Field</h3-->
              <div class="row py-3">
                <input id="inputField" type="text" name="" value="" class="roundCorners mx-3">
                <button type="button" name="button" onclick="addToList()" class="mr-3">Legg til</button>
                <button type="button" name="button" onclick="removeFromList()">Fjern</button>
              </div>
              <!--button type="button" name="button" onclick="logList()">Log List</button>
              <button type="button" name="button" onclick="clearConsole()">Clear Console</button>
              <button type="button" name="button" onclick="printList()">Print List</button>
              <button type="button" name="button" onclick="clearDisplay()">Clear Display</button>
              <button type="button" name="button" onclick="refreshDisplay()">Refresh Display</button-->
            </div>
            <!--div id="feedbackField" class="col-12 roundCorners py-3">
              <h3 class="text-white">Feedback Field:</h3>
              <p id="feedbackElement" class="text-white"></p>
            </div-->
          </div>
        </div>
        <!--div class="col-6">
          <div class="col-3 d-flex justify-content-center bg-secondary roundCorners">
            <p class="text-white m-0">1.Brød</p>
          </div>
        </div-->
        <div id="displayField" class="col-6">
          <h3>Liste:</h3>
        </div>
      </div>
  </div>
</body>
