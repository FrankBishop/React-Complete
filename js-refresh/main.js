console.log('this runs')

const myName = 'Frank';
console.log(myName);

// const printMyName = (name) => {
//   console.log(name);
// }

// printMyName('Frank')

// const printMyName2 = () => {
//   console.log('Frank2');
// }

// printMyName2();

class Human {
  gender = 'male';


  printGender = () => {
    console.log(this.gender)
  }
}

class Person extends Human {
  name = 'Frank';

  printMyName = () => {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName();
person.printGender();


const numbers = [1,2,3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers)

const personO = {
  name: 'Frank'
};

const newPerson = {
  ...personO,
  age: 36
}

console.log(newPerson);

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));

const numbers2 = [1,2,3];
[num1, num2] = numbers
console.log(num1, num2)

// const numberp = 1;
// const number2 = number;

// console.log(number2)

const mapNums = [2,4,6];

const doubleMapNums = mapNums.map((num) => {
  return num * 2;
})

console.log(doubleMapNums);



