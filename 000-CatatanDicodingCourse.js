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

// OOP INHERITANCE AND OVERRIDING

//create super class

class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}

// class FrontEndDeveloper extends Developer{
//   buildUI(){
//     console.log(`${developer.name} is building UI...`)
//   }
// }
// class BackEndDeveloper extends Developer{
//   buildUI(){
//     console.log(`${developer.name} is building API...`)
//   }
// }
// class DevOps extends Developer{
//   buildUI(){
//     console.log(`${developer.name} is deploying App...`)
//   }
// }

//merubahnya dengan object composition
function canBuildUI(developer) {
  return {
    buildUI: () => console.log(`${developer.name} is building UI...`),
  };
}

function canBuildApi(developer) {
  return {
    buildApi: () => console.log(`${developer.name} is building Api...`),
  };
}
function canDeployApp(developer) {
  return {
    deployApp: () => console.log(`${developer.name} is deploying App...`),
  };
}

//penggunaan object assign
function createFrontEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canBuildApi(developer));
}

function createDevOps(name) {
  const developer = new Developer(name);
  return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
  const developer = new Developer(name);
  return Object.assign(
    developer,
    canBuildUI(developer),
    canBuildApi(developer),
    canDeployApp(developer)
  );
}

//
const frontEndDeveloper = createFrontEndDeveloper("Fulan");
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(
  `Apakah ${frontEndDeveloper.name} seorang developer?`,
  frontEndDeveloper instanceof Developer
);

const backEndDeveloper = createBackEndDeveloper("Budi");
backEndDeveloper.commitChanges();
backEndDeveloper.buildApi();
console.log(
  `Apakah ${backEndDeveloper.name} seorang developer?`,
  backEndDeveloper instanceof Developer
);

const devOpsDeveloper = createDevOps("Mardigu");
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(
  `Apakah ${devOpsDeveloper.name} seorang developer?`,
  devOpsDeveloper instanceof Developer
);

const fullStackDeveloper = createFullStackDeveloper("Iqbaal");
fullStackDeveloper.commitChanges();
fullStackDeveloper.buildUI();
fullStackDeveloper.buildApi();
fullStackDeveloper.deployApp();
console.log(
  `Apakah ${fullStackDeveloper.name} seorang developer?`,
  fullStackDeveloper instanceof Developer
);

// SUBMISSION //

class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = parseInt(age));
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age);
    this.isMammal = true;
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age) {
    super(name, age);
    this.isMammal = false;
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat());

const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly());

// SUBMISSION

const books = [
  { title: "The Da Vinci Code", author: "Dan Brown", sales: 5094805 },
  { title: "The Ghost", author: "Robert Harris", sales: 807311 },
  { title: "White Teeth", author: "Zadie Smith", sales: 815586 },
  { title: "Fifty Shades of Grey", author: "E. L. James", sales: 3758936 },
  { title: "Jamie's Italy", author: "Jamie Oliver", sales: 906968 },
  { title: "I Can Make You Thin", author: "Paul McKenna", sales: 905086 },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K Rowling",
    sales: 4475152,
  },
];

const greatAuthors = books
  .filter((book) => book.sales >= 1000000)
  .map(
    (name) =>
      `${name.author} adalah penulis buku ${name.title} yang sangat hebat!`
  );

console.log(greatAuthors);

const listGreatAuthors = books.filter((book) => book.sales >= 1000000);

console.log(listGreatAuthors);

const sayGreatAuthors = listGreatAuthors.map(
  (name) =>
    `${name.author} adalah penulis buku ${name.title} yang sangat hebat!`
);

console.log(sayGreatAuthors);
