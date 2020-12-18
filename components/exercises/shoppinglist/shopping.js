//Creates the main list
let shoppingList;

//Triggers the createList() on pageload.
window.onload = createList();

/*List functions -------------------------------------------->*/

/*  createList()
  Makes the shoppingList an array;
*/
function createList(){
  shoppingList = ['Melk','Brød','Smør'];
}

/*  removeFromList
  Checks for an element in the shoppingList
  and removes it if found.
*/
function removeFromList(){
  let input = document.getElementById('inputField').value;
  if(input){
    if(checkList(input)){
      for(let i = 0; i < shoppingList.length; i++){
        if(input === shoppingList[i]){
          shoppingList.splice(i,1);
          removeFromDisplay(input);
        }
      }
    }else{
      printToFeedback("Didn't find element");
      document.getElementById('feedbackField').style.backgroundColor = '#dc3545';
    }
  }else{
    printToFeedback('Invalid element');
    document.getElementById('feedbackField').style.backgroundColor = '#dc3545';
  }
}

/*  addToList()
  Takes the value from the inputField and adds it
  to the shoppingList if its a valid element.
*/
function addToList(){
  let input = document.getElementById('inputField').value;
  if(input && checkList(input)===false){
    shoppingList.push(input);
  }else{
    /*
    printToFeedback('Invalid element');
    document.getElementById('feedbackField').style.backgroundColor = '#dc3545';
    */
  }
  refreshDisplay();
}

/*  checkList(element)
  Checks the shoppingList for an given item(element)
  and returns a boolean value based on findings.
*/
function checkList(element){
  for(let i = 0; i < shoppingList.length; i++)
  {
    if(element === shoppingList[i]){
      return true;
    }
  }
  return false;
}

/*  returnListElements()
  Goes trough the list and returns every element.
*/
function returnListElements(){
  for(let i = 0; i < shoppingList.length; i++){
    return shoppingList[i];
  }
}


/*  printToFeedback(message)
  Takes a message(message) and manipulates the
  feedbackElement to display message.
*/
function printToFeedback(message){
  document.getElementById('feedbackField').style.backgroundColor = '#17a2b8';
  document.getElementById('feedbackElement').innerHTML = message;
}

/*  printList()
  Prints the list in the feedback element in the app.
*/
function printList(){
  printToFeedback(shoppingList);
}

/*Display functions -------------------------------------------->*/

/*  refreshDisplay()
  Updates the display.
*/
function refreshDisplay(){
  clearDisplay();
  displayList();
}

/* displayList()
  Display all elements in shoppingList
*/
function displayList(){
  for(let i = 0; i < shoppingList.length; i++){
    addToDisplay('p', /*(i+1)+'. '+*/shoppingList[i]);
  }
}

/* clearDisplay()
  Removes HTML in the display.
*/
function clearDisplay(){
  document.getElementById('displayField').innerHTML = '';
  addToDisplay('h3', 'Liste:');
}

function removeFromDisplay(input){
  removeElement(input);
  refreshDisplay();
}

/* addToDisplay(element, content)
  Adds and element(element, html) to the display with content(conent).
*/
function addToDisplay(element,content){
  let container = createElement('div');
  let meat = createElement(element,content);

  if(element !== 'h3'){
    container.style.backgroundColor = '#151515';
    container.classList.add(
      'py-1',
      'roundCorners',
      'col-3',
      'd-flex',
      'justify-content-center',
      'my-1'
    );

    meat.classList.add(
      'text-white',
      'm-0'
    );
  }

  container.appendChild(meat);
  document.getElementById('displayField').appendChild(container);
  /*document.getElementById('displayField').appendChild(createElement(element,content));*/
}

/*HTML functions -------------------------------------------->*/

function removeElement(content){
  let list = document.getElementById('displayField').getElementsByTagName('p');
  for(let i = 0; i < list.length; i++){
    if(list[i].innerHTML === content){
      list[i].remove();
    }
  }
}

/* createElement(element, content)
  Creates an HTML element based on input(element)
  and inserts an text node with given content(content)
  then returns the created element.
*/
function createElement(element, content){
  let craElement = document.createElement(element);
  if(content){
    craElement.appendChild(document.createTextNode(content));
  }
  return craElement;
}

/*Console functions -------------------------------------------->*/

/*  logList()
  Prints the content of the list to the console.
*/
function logList(){
  for(let i = 0; i < shoppingList.length; i++){
    console.log(shoppingList[i]);
  }
}

/*  clearConsole()
  Clear the console
*/
function clearConsole(){
  console.clear();
}
