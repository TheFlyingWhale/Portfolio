let shopNames = ['Bil & Mekanikk', 'Bilfix', 'Mekanikeren','Fixern'];
let locations = ['Herøy','Mosjøen','Sandnessjøen','Leirfjord'];

function repairShop(givenName, givenTyrePrice, givenRadiatorPrice, givenEnginePrice, givenOilPrice, givenTyreTime, givenRadiatorTime, givenEngineTime, givenOilTime){
  this.name = givenName;
  this.tyrePrice = givenTyrePrice;
  this.radiatorPrice = givenRadiatorPrice;
  this.enginePrice = givenEnginePrice;
  this.oilPrice = givenOilPrice;
  this.tyreTime = givenTyreTime;
  this.radiatorTime = givenRadiatorTime;
  this.engineTime = givenEngineTime;
  this.oilTime = givenOilTime;
  this.getInfo = () => {
    console.log(`Name: ${this.name}`);
    console.log(`Tyre Price: ${this.tyrePrice}`);
    console.log(`Radiator Price: ${this.radiatorPrice}`);
    console.log(`Engine Price: ${this.enginePrice}`);
    console.log(`Oil Price: ${this.oilPrice}`);
    console.log(`Time Tyrechange: ${this.tyreTime}`);
    console.log(`Time Radiatorchange: ${this.radiatortime}`);
    console.log(`Time Enginechange : ${this.engineTime}`);
    console.log(`Time Oilchange : ${this.oilTime}`);
  };
  this.getAsHTML = () =>{
    let mainContainer = document.createElement('div');
    for(let detail in this){
      if(typeof this[detail] != 'function'){
        let info = document.createElement('p');
        info.appendChild(document.createTextNode(`${detail}: ${this[detail]}`));
        mainContainer.appendChild(info);
      }
    }
    return mainContainer;
  }
}

const repairShopp = (name, location, tyrePrice, radiatorPrice, enginePrice, oilPrice, tyreTime, radiatorTime, engineTime, oilTime) => {
  return{
    details:{name, location},prices:{tyrePrice, radiatorPrice, enginePrice, oilPrice},time:{tyreTime, radiatorTime, engineTime, oilTime},
    setRandom(){
      this.name = shopNames[Math.floor(Math.random() * shopNames.length)];
      this.location = locations[Math.floor(Math.random() * locations.length)];
      this.tyrePrice = Math.floor(Math.random() * 300) + 400;
      this.radiatorPrice = Math.floor(Math.random() * 1500) + 1500;
      this.enginePrice = Math.floor(Math.random() * 3000) + 4000;
      this.oilPrice = Math.floor(Math.random() * 1000) + 500;
      this.tyreTime = Math.floor(Math.random() * 30) + 30;
      this.radiatorTime = Math.floor(Math.random() * 120) + 60;
      this.engineTime = Math.floor(Math.random() * 2880) + 2880;
      this.oilTime = Math.floor(Math.random() * 60) + 60;
    },
    getInfo(){
      for(let detail in this){
        if(typeof this[detail] != 'function' && typeof this[detail] != 'object' && this[detail]){
          console.log(`${detail}: ${this[detail]}`);
        }
      }
    },
    getAsHTML(){
      let mainContainer = document.createElement('div');
      for(let detail in this){
        if(typeof this[detail] != 'function' && typeof this[detail] != 'object'){
          let info = document.createElement('p');
          info.appendChild(document.createTextNode(`${detail}: ${this[detail]}`));
          mainContainer.appendChild(info);
        }
      }
      return mainContainer;
    }
  }
}

let t1 = repairShopp();
t1.setRandom();
t1.getInfo();

/*  genRanRepairshop()
  Makes a repairShop object and give it random properties.
  Returns the repairShop object.
*/
genRanRepairshop = () =>{
  let shop = new repairShop();
  shop.name = shopNames[Math.floor(Math.random() * shopNames.length)];
  shop.tyrePrice = Math.floor(Math.random() * 300) + 400;
  shop.radiatorPrice = Math.floor(Math.random() * 1500) + 1500;
  shop.enginePrice = Math.floor(Math.random() * 3000) + 4000;
  shop.oilPrice = Math.floor(Math.random() * 1000) + 500;
  shop.tyreTime = Math.floor(Math.random() * 30) + 30;
  shop.radiatorTime = Math.floor(Math.random() * 120) + 60;
  shop.engineTime = Math.floor(Math.random() * 2880) + 2880;
  shop.oiltime = Math.floor(Math.random() * 60) + 60;
  return shop;
}

const carMakes = ['Jaguar','Volvo','BMW','Audi'];
const carDrives = ['RWD','FWD','4WD'];
const colors = ['Blue','Yellow','Red', 'Green'];
const engines = ['V12','V8','V6', 'V4','IL6','IL4','Boxer6','Boxer4'];

/*  Car - Object
  This objects represents a car.
  The car have details to represent a sertain car.
  The car also have different parts(partsState), wich might need repair or not.
*/
function car(givenMake, givenDrive, givenColor, givenEngine, givenTireState, givenRaiatorState, givenEngineState, givenOilState){
  this.make = givenMake;
  this.drive = givenDrive;
  this.color = givenColor;
  this.engine = givenEngine;
  this.tireState = givenTireState;
  this.radiatorState = givenRaiatorState;
  this.engineState = givenEngineState;
  this.oilState = givenOilState;
  this.getCar = () =>{
    return this;
  }
  this.getInfo = () =>{
    console.log(`Make: ${this.make}`);
    console.log(`Drive: ${this.drive}`);
    console.log(`Color: ${this.color}`);
    console.log(`Engine: ${this.engine}`);
    console.log(`Tire State: ${this.tireState}`);
    console.log(`Radiator State: ${this.radiatorState}`);
    console.log(`Engine State: ${this.engineState}`);
    console.log(`Oil State: ${this.oilState}`);
  }
  this.getAsHTML = () =>{
    let mainContainer = document.createElement('div');
    for(let detail in this){
      if(typeof this[detail] != 'function'){
        let info = document.createElement('p');
        info.appendChild(document.createTextNode(`${detail}: ${this[detail]}`));
        mainContainer.appendChild(info);
      }
    }
    return mainContainer;
  }
}

/*  generateRandomCar()
  Makes a car object and gives it random properties.
  Returns the car object.
*/
generateRandomCar = () => {
  let genCar = new car();
  genCar.make = carMakes[Math.floor(Math.random() * carMakes.length)];
  genCar.drive = carDrives[Math.floor(Math.random() * carDrives.length)];
  genCar.color = colors[Math.floor(Math.random() * colors.length)];
  genCar.engine = engines[Math.floor(Math.random() * engines.length)];
  genCar.tireState = Math.floor(Math.random()*2);
  genCar.radiatorState = Math.floor(Math.random()*2);
  genCar.engineState = Math.floor(Math.random()*2);
  genCar.oilState = Math.floor(Math.random()*2);
  return genCar;
}

const names = ['Ole','Per','Erlend','Gustav','August','Martin','Petronella'];
const surNames = ['Walberg','Ottesen','Gabrielsen','Caroliusen','Granskogen','Sakkariasen','Johnsen','Hansen'];

/* Person - Object
  The person have details to represent a sertain person.
  The person also holds a car object.
*/
function person(givenName, givenSurname, givenAge, givenBalance, givenCar){
  this.name = givenName;
  this.surName = givenSurname;
  this.age = givenAge;
  this.balance = givenBalance;
  this.car = givenCar;
  this.getInfo = () =>{
    console.log(`Name: ${this.name} ${this.surName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Balance: ${this.balance}`);
  };
  this.getAsHTML = () =>{
    let mainContainer = document.createElement('div');
    for(let detail in this){
      if(typeof this[detail] != 'function' && typeof this[detail] != 'object'){
        let info = document.createElement('p');
        info.appendChild(document.createTextNode(`${detail}: ${this[detail]}`));
        mainContainer.appendChild(info);
      }
    }
    return mainContainer;
  };
}

/* generateRandoomPerson()
  Makes a new person object and gives it random properties.
  Returns the person object.
*/
generateRandomPerson = () =>{
  let genPer = new person();
  genPer.name = names[Math.floor(Math.random()*names.length)];
  genPer.surName = surNames[Math.floor(Math.random()*names.length)];
  genPer.age = Math.floor(Math.random() * 62) + 18;
  genPer.balance = Math.floor(Math.random() * 9000)+1000;
  genPer.car = generateRandomCar();
  return genPer;
}

/*  Experimental code --------------------------------------------------------------------------------------------
*/

/* This is a better way of dealing with returning objects
const testFactory = (name, surName) => {
  if(name && surName){
    return{
      _name: name,
      _surName: surName,
      get info(){
        return `My name is ${this._name} ${this._surName}`;
      }
    }
  }else{
    return{
      _name: names[Math.floor(Math.random() * names.length)],
      _surName: surNames[Math.floor(Math.random() * surNames.length)],
      get info(){
        return `My name is ${this._name} ${this._surName}`;
      }
    }
  }
}
*/

// This is the same just with less code
const testFactory = (_name, _surName) => {
  if(_name && _surName){
    return{
      _name,
      _surName,
      set name(newName){
        _name = newName;
      },
      get info(){
        return `My name is ${this._name} ${this._surName}`;
      },
    }
  }else{
    return{
      _name: names[Math.floor(Math.random() * names.length)],
      _surName: surNames[Math.floor(Math.random() * surNames.length)],
      get info(){
        return `My name is ${this._name} ${this._surName}`;
      }
    }
  }
}

/*
console.log(testFactory('Ole', 'Walberg'));
console.log(testFactory());
console.log(testFactory('Peder', 'Ottesen').info);
console.log(testFactory().info);
*/
let p1 = testFactory('Lollo', 'Pollo');
let p2 = testFactory();


main = () =>{
  let r1 = genRanRepairshop();
  let r2 = genRanRepairshop();
  let r3 = genRanRepairshop();
  let m1 = generateRandomPerson();
  let m2 = generateRandomPerson();
  let m3 = generateRandomPerson();
  document.getElementById('garageContainer0').appendChild(t1.getAsHTML());
  document.getElementById('garageContainer1').appendChild(r2.getAsHTML());
  document.getElementById('garageContainer2').appendChild(r3.getAsHTML());
  document.getElementById('personContainer0').appendChild(m1.getAsHTML());
  document.getElementById('personContainer1').appendChild(m2.getAsHTML());
  document.getElementById('personContainer2').appendChild(m3.getAsHTML());
  document.getElementById('carContainer0').appendChild(m1.car.getAsHTML());
  document.getElementById('carContainer1').appendChild(m2.car.getAsHTML());
  document.getElementById('carContainer2').appendChild(m3.car.getAsHTML());
}

class Vehicle{
  constructor(name, fuel, seats){
    this._name = name;
    this._fuel = fuel;
    this._seats = seats;
  }
  get name(){
    return this._name;
  }
  set name(newName){
    this._name = newName;
  }
  get fuel(){
    return this._fuel;
  }
  set fuel(newFuel){
    this._fuel = newFuel;
  }
  get seats(){
    return this._seats;
  }
  set seats(newSeats){
    this._seats = newSeats;
  }
}
