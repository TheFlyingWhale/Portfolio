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
  }
}

/*  genRanRepairshop()
  Makes a repairShop object and give it random properties.
  Returns the repairShop object.
*/
genRanRepairshop = () =>{
  let shop = repairShop;
  shop.setName('Herøy Bil & Mekanisk');
  shop.setLocation('Herøy');
  shop.setPriceTyre(500);
  shop.setPriceRadiator(2000);
  shop.setPriceEngine(5000);
  shop.setPriceOil(1000);
  shop.setTyreEstimate(30);
  shop.setRadiatorEstimate(120);
  shop.setEngineEstimate(2880);
  shop.setOilEstimate(60);
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
  getCar(){
    return this;
  },
  getInfo() {
    for(let detail in this.details){
      console.log(`${detail}: ${this.details[detail]}`);
    }
  },
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
  return genCar;
}

const names = ['Ole','Per','Erlend','Gustav','August','Martin','Petronella'];
const surNames = ['Walberg','Ottesen','Gabrielsen','Caroliusen','Granskogen','Sakkariasen','Johnsen','Hansen'];

/* Person - Object
  The person have details to represent a sertain person.
  The person also holds a car object.
*/
person = {
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
  }
}
/*  generateRandomPerson()
  Makes a person object and gives it random properties.
  Returns the person object.
*/
generateRandomPerson = () =>{
  let genPer = person;
  genPer.setName(names[Math.floor(Math.random() * names.length)]);
  genPer.setSurName(surNames[Math.floor(Math.random() * surNames.length)]);
  genPer.setAge(Math.floor(Math.random() * 62) + 18);
  genPer.setAccBalance(Math.floor(Math.random() * 9000)+1000);
  genPer.setPersonalCar(generateRandomCar());
  return genPer;
}

/*  Experimental code --------------------------------------------------------------------------------------------
*/
let shop = genRanRepairshop();
shop.getInfo();
