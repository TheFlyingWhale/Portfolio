const carMakes = ['Jaguar','Volvo','BMW','Audi'];
const carDrives = ['RWD','FWD','4WD'];
const colors = ['Blue','Yellow','Red', 'Green'];
const engines = ['V12','V8','V6', 'V4','IL6','IL4','Boxer6','Boxer4'];

let detailedCar = {
  details : {
    make : 'Audi',
    color : 'Yellow'
  },
  setMake(){
    this.details.make = 'Jaguar';
  }
}

console.log(detailedCar.details.make);
detailedCar.setMake();
console.log(detailedCar.details.make);

derp

let car = {
  details : {
    make : null,
    drive : null,
    color : null,
    engine : null},
  setColor (givenColor){
    this.details.color = givenColor;
  },
  setMake (name){
    this.make = name;
  },
  setDrive(type){
    this.drive = type;
  },
  setEngine(type){
    this.engine = type;
  },
  getCar(){
    return this;
  },
  getInfo() {
    /*
    if(this.make && !this.drive &&){
      return this.make;
    }else if(this.make && this.drive && !this.color){
      return this.make + ' ' + this.drive;
    }else if(this.make && this.drive && this.color){
      return this.make + ' ' + this.drive + ' ' + this.color;
    }else{
      console.log('Something went wrong');
    }*/
  },
}

/*  randomCar()
  Makes a car, gives it random specs and then returns it.
*/
randomCar = () =>{
  let genCar = car;
  genCar.setMake(carMakes[Math.floor(Math.random() * carMakes.length)]);
  genCar.setDrive(carDrives[Math.floor(Math.random() * carDrives.length)]);
  genCar.setColor(colors[Math.floor(Math.random() * colors.length)]);
  genCar.setEngine(engines[Math.floor(Math.random() * engines.length)]);
  return genCar;
}

let person = {
  name : 'Ole',
  surName : 'Walberg',
  age : 24,
  accBalance : '240',
  personalCar : randomCar()
}

/*
console.log(person.personalCar.getInfo());
for(let detail in car){
  console.log(`${detail}: ${car[detail]}`);
}
*/
//console.log(person.personalCar.getInfo());



logCar = () =>{
  console.log(car.getMake());
}
