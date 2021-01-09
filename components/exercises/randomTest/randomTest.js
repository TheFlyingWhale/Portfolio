class ObjectCreator{
  constructor(id, name){
    this.id = id;
    this.name = name;
  };
  logId = () => {
    console.log(this.id);
  }
};

const anObject = {id: 1, name: 'ole'};

const logThis = (id, name) => {
  console.log(id);
}

const yo = new ObjectCreator(2, 'peder');
const yo2 = new ObjectCreator(5, 'totto');
const yo3 = new ObjectCreator(3, 'heyoo');
/*
let arr = [yo, yo2];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const deleteThis = (delThis) => {
  arr.pop(arr.indexOf(delThis));
}

console.log('------');

deleteThis(yo);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/
class ListOfStuff{
  constructor(){
    this.Arr = [yo, yo2, yo3];
    let list = document.createElement('div');
    list.appendChild(document.createTextNode('Hello World'));
  }
  logAll(){
    console.log('-V-')
    for(let i = 0; i < this.Arr.length; i++){
      console.log(this.Arr[i]);
    }
    console.log('-A-');
  }
  removeItem(delThis){
    this.Arr.pop(this.Arr.indexOf(delThis));
  }
}

let myList = new ListOfStuff();

myList.logAll();
myList.removeItem(yo);
myList.logAll();
