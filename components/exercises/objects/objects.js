const carMakes = ['Jaguar','Volvo','BMW','Audi'];
const carDrives = ['RWD','FWD','4WD'];
const colors = ['Blue','Yellow','Red', 'Green'];
const engines = ['V12','V8','V6', 'V4','IL6','IL4','Boxer6','Boxer4'];

car = {
  details : {
    make : null,
    drive : null,
    color : null,
    engine : null},
  setColor (givenColor){
    this.details.color = givenColor;
  },
  setMake (name){
    this.details.make = name;
  },
  setDrive(type){
    this.details.drive = type;
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
  Makes a car, gives it random specs and then returns it.
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

generateRandomPerson = () =>{
  let genPer = person;
  genPer.setName(names[Math.floor(Math.random() * names.length)]);
  genPer.setSurName(surNames[Math.floor(Math.random() * surNames.length)]);
  genPer.setAge(Math.floor(Math.random() * 80) + 18);
  genPer.setAccBalance(Math.floor(Math.random() * 10000)+1000);
  genPer.setPersonalCar(generateRandomCar);
  return genPer;
}

generateRandomPerson().getInfo();
console.log(' ');
generateRandomPerson().getInfo();
console.log(' ');
generateRandomCar().getInfo();
console.log(' ');
generateRandomCar().getInfo();
