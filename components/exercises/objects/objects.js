let shopNames = ['Bil & Mekanikk', 'Bilfix', 'Mekanikeren','Fixern'];
let locations = ['Herøy','Mosjøen','Sandnessjøen','Leirfjord'];

repairShop = {
  details : {
    name : null,
    location : null,
  },
  prices : {
    tyreChange : null,
    radiatorRepair : null,
    engineRepair : null,
    oilChange : null
  },
  timeEstimate : {
    tyreChange : null,
    radiatorRepair : null,
    engineRepair : null,
    oilChange : null
  },
  setName(givenName){
    this.details.name = givenName;
  },
  setLocation(givenLocation){
    this.details.location = givenLocation;
  },
  setPriceTyre(price){
    this.prices.tyreChange = price;
  },
  setPriceRadiator(price){
    this.prices.radiatorRepair = price;
  },
  setPriceEngine(price){
    this.prices.engineRepair = price;
  },
  setPriceOil(price){
    this.prices.oilChange = price;
  },
  setTyreEstimate(estimate){
    this.timeEstimate.tyreChange = estimate;
  },
  setRadiatorEstimate(estimate){
    this.timeEstimate.radiatorRepair = estimate;
  },
  setEngineEstimate(estimate){
    this.timeEstimate.engineRepair = estimate;
  },
  setOilEstimate(estimate){
    this.timeEstimate.oilChange = estimate;
  },
  getInfo(){
    for(let detail in this.details){
      console.log(`${detail}: ${this.details[detail]}`);
    };
    console.log('');
    console.log('Prices:');
    for(let detail in this.prices){
      console.log(`${detail}: ${this.prices[detail]} kr`);
    };
    console.log('');
    console.log('Repair time:');
    for(let detail in this.timeEstimate){
      console.log(`${detail}: ${this.timeEstimate[detail]} min`);
    };
  },
  getHTML(){
    let mainContainer = document.createElement('div');
    for(let detail in this.details){
      let info = document.createElement('p');
      info.appendChild(document.createTextNode(`${detail}: ${this.details[detail]}`));
      mainContainer.appendChild(info);
    };
    for(let detail in this.prices){
      let info = document.createElement('p');
      info.appendChild(document.createTextNode(`${detail}: ${this.prices[detail]},-`));
      mainContainer.appendChild(info);
    };
    for(let detail in this.timeEstimate){
      let info = document.createElement('p');
      info.appendChild(document.createTextNode(`${detail}: ${this.timeEstimate[detail]} min`));
      mainContainer.appendChild(info);
    };
    return mainContainer;
  }
}

/*  genRanRepairshop()
  Makes a repairShop object and give it random properties.
  Returns the repairShop object.
*/
genRanRepairshop = () =>{
  let shop = repairShop;
  shop.setName(shopNames[Math.floor(Math.random() * shopNames.length)]);
  shop.setLocation(locations[Math.floor(Math.random() * locations.length)]);
  shop.setPriceTyre(Math.floor(Math.random() * 300) + 400);
  shop.setPriceRadiator(Math.floor(Math.random() * 1500) + 1500);
  shop.setPriceEngine(Math.floor(Math.random() * 3000) + 4000);
  shop.setPriceOil(Math.floor(Math.random() * 1000) + 500);
  shop.setTyreEstimate(Math.floor(Math.random() * 30) + 30);
  shop.setRadiatorEstimate(Math.floor(Math.random() * 120) + 60);
  shop.setEngineEstimate(Math.floor(Math.random() * 2880) + 2880);
  shop.setOilEstimate(Math.floor(Math.random() * 60) + 60);
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
car = {
  details : {
    make : null,
    drive : null,
    color : null,
    engine : null},
  partsState : {
    tires : null,
    radiator : null,
    engine : null,
    oil : null,
  },
  setMake(name){
    this.details.make = name;
  },
  setDrive(type){
    this.details.drive = type;
  },
  setColor (givenColor){
    this.details.color = givenColor;
  },
  setEngine(type){
    this.details.engine = type;
  },
  setTireState(state){
    this.partsState.tires = state;
  },
  setRadiatorState(state){
    this.partsState.radiator = state;
  },
  setEngineState(state){
    this.partsState.engine = state;
  },
  setOilState(state){
    this.partsState.oil = state;
  },
  getCar(){
    return this;
  },
  getInfo() {
    for(let detail in this.details){
      console.log(`${detail}: ${this.details[detail]}`);
    };
    for(let detail in this.partsState){
      console.log(`${detail}: ${this.partsState[detail]}`);
    };
  },
  getHTML(){
    let mainContainer = document.createElement('div');
    for(let detail in this.details){
      let info = document.createElement('p');
      info.appendChild(document.createTextNode(`${detail}: ${this.details[detail]}`));
      mainContainer.appendChild(info);
    };
    for(let detail in this.partsState){
      let info = document.createElement('p');
      info.appendChild(document.createTextNode(`${detail}: ${this.partsState[detail]}`));
      mainContainer.appendChild(info);
    };
    return mainContainer;
  }
}

/*  randomCar()
  Makes a car object and gives it random properties.
  Returns the car object.
*/
generateRandomCar = () =>{
  let genCar = car;
  genCar.setMake(carMakes[Math.floor(Math.random() * carMakes.length)]);
  genCar.setDrive(carDrives[Math.floor(Math.random() * carDrives.length)]);
  genCar.setColor(colors[Math.floor(Math.random() * colors.length)]);
  genCar.setEngine(engines[Math.floor(Math.random() * engines.length)]);
  genCar.setTireState(Math.floor(Math.random()*2));
  genCar.setRadiatorState(Math.floor(Math.random()*2));
  genCar.setEngineState(Math.floor(Math.random()*2));
  genCar.setOilState(Math.floor(Math.random()*2));
  return genCar;
}

const names = ['Ole','Per','Erlend','Gustav','August','Martin','Petronella'];
const surNames = ['Walberg','Ottesen','Gabrielsen','Caroliusen','Granskogen','Sakkariasen','Johnsen','Hansen'];

/* Person - Object
  The person have details to represent a sertain person.
  The person also holds a car object.
*/
let person = {
  details :{
    name : null,
    surName : null,
    age : null,
    accBalance : null
  },
  personalCar : null,
  setName(givenName){
    this.details.name = givenName;
  },
  setSurName(givenName){
    this.details.surName = givenName;
  },
  setAge(givenAge){
    this.details.age = givenAge;
  },
  setAccBalance(givenBalance){
    this.details.accBalance = givenBalance;
  },
  setPersonalCar(givenCar){
    this.personalCar = givenCar;
  },
  getInfo(){
    for(let detail in this.details){
      console.log(`${detail}: ${this.details[detail]}`);
    }
  },
  getHTML(){
    let mainContainer = document.createElement('div');
    for(let detail in this.details){
      let info = document.createElement('p');
      info.appendChild(document.createTextNode(`${detail}: ${this.details[detail]}`));
      mainContainer.appendChild(info);
    }
    return mainContainer;
  }
}
/* DOES NOT WORK  generateRandomPerson()
  Makes a person object and gives it random properties.
  Returns the person object.
*/
generateRandomPerson = () =>{
  let genPer = new Object(person);
  genPer.setName(names[Math.floor(Math.random() * names.length)]);
  genPer.setSurName(surNames[Math.floor(Math.random() * surNames.length)]);
  genPer.setAge(Math.floor(Math.random() * 62) + 18);
  genPer.setAccBalance(Math.floor(Math.random() * 9000)+1000);
  genPer.setPersonalCar(generateRandomCar());
  return genPer;
}

/* THIS WORKS!! generateRandoomPerson()
  Makes a new person object and gives it random properties.
  Returns the person object.
*/
generateRandoomPerson = () =>{
  let genPer = new persoon();
  genPer.name = names[Math.floor(Math.random()*names.length)];
  genPer.surName = surNames[Math.floor(Math.random()*names.length)];
  genPer.age = Math.floor(Math.random() * 62) + 18;
  genPer.balance = Math.floor(Math.random() * 9000)+1000;
  return genPer;
}

/*  Experimental code --------------------------------------------------------------------------------------------
*/

let m1 = generateRandoomPerson();
let m2 = generateRandoomPerson();
let m3 = new persoon('Ulf','Kåre',69,6969);

m1.getInfo();
m2.getInfo();
m3.getInfo();

function persoon(givenName, givenSurname, givenAge, givenBalance){
  this.name = givenName;
  this.surName = givenSurname;
  this.age = givenAge;
  this.balance = givenBalance;
  this.getInfo = () =>{
    console.log(`Name: ${this.name} ${this.surName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Balance: ${this.balance}`);
  }
}


main = () =>{
  let per0 = generateRandomPerson();
  let per1 = generateRandomPerson();
  let per2 = generateRandomPerson();
  document.getElementById('garageContainer0').appendChild(genRanRepairshop().getHTML());
  document.getElementById('garageContainer1').appendChild(genRanRepairshop().getHTML());
  document.getElementById('garageContainer2').appendChild(genRanRepairshop().getHTML());
  document.getElementById('personContainer0').appendChild(per0.getHTML());
  document.getElementById('personContainer1').appendChild(per1.getHTML());
  document.getElementById('personContainer2').appendChild(per2.getHTML());
  document.getElementById('carContainer0').appendChild(per0.personalCar.getHTML());
  document.getElementById('carContainer1').appendChild(per1.personalCar.getHTML());
  document.getElementById('carContainer2').appendChild(per2.personalCar.getHTML());
}
