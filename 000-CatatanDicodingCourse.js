//
const sayHello = function (num) {
  total = num * num;
  return total;
};

const result = sayHello(3);

console.log(result);

//
function calculate(value) {
  return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}

console.log(calculate(3));

//CONSTRUCTUR FUNCTION
// function Car(brand, year, speed) {
//   (this.brand = brand), (this.year = year), (this.speed = speed);
// }

//CONSTRUCTUR FUNCTION (using class)
class Car {
  #chassisNumber = null;
  constructor(brand, year, maxSpeed, chassisNumber) {
    (this.brand = brand),
      (this.year = year),
      (this.maxSpeed = maxSpeed),
      (this.#chassisNumber = this.#generateChassisNumber());
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    return "You are not allowerd to change the chassis number";
  }

  //Methods
  drive() {
    return `${this.brand} ${this.#chassisNumber} is driving`;
  }

  reverse() {
    return `${this.brand} ${this.#chassisNumber} is reversing`;
  }

  turn(direction) {
    return `${this.brand} ${this.#chassisNumber} is turning ${direction}`;
  }

  #generateChassisNumber() {
    return `${this.brand[0]}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

Car.prototype.desc = function () {
  return `Merk Mobil ini adalah ${this.brand}, yang dirilis pada tahun ${this.year} dengan kecepatan maksimal ${this.maxSpeed} Km/h, nomor mesin dari mobil ini adalah ${this.chassisNumber}`;
};

const car1 = new Car("Honda", 2009, 200, "h-1");
const car2 = new Car("Mitsubishi", 2016, 300, "m-1");

car1.chassisNumber = "ubah-111";

console.log(car1);

console.log(car1.desc());
console.log(car2.desc());

console.log(car2.drive());
console.log(car1.reverse());
console.log(car2.turn("left"));
console.log(car1.turn("right"));

console.log(typeof Car);

// MAKE A RANDOM NUMBER
function randomNumber() {
  return `${Math.floor(Math.random() * 10000) + 1} kali sehari`;
}
console.log(randomNumber());

// USING GET AND SET METHOD

class User {
  constructor(firstName, lastName) {
    (this.firstName = firstName), (this.lastName = lastName);
  }
  get fullName() {
    return `Nama depan kamu adalah ${this.firstName}, dan nama belakang kamu adalah ${this.lastName}`;
  }
  set fullName(inputFullName) {
    const [firstName, lastName] = inputFullName.split(" ");
    (this.firstName = firstName), (this.lastName = lastName);
  }
}

const input = new User("Robin", "Tohir");
console.log(input);
console.log(input.fullName);

input.fullName = "Iqbaal Dhoifulloh";
console.log(input.fullName);
