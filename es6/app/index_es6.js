import { students, total, add } from './students';
import multiply from './students';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let a = 'hello';
console.log(a);

{
  let a = 'goodbye';
  console.log('a inside scope', a);
}

let d = `hello ${a}`;
console.log(d);

let array = [7, 8, 9];
let newarray = [6, ...array, 10];
console.log(newarray);
//speard operator
function print(...z) {
  console.log(z);
}

print(1, 2, 3, 4, 5, 6);

//destructuring assingment
let c = [100, 200];
let [c1, c2] = c;
console.log(c1, c2);

let fellowship = ["frodo", "aragorn", "gandalf"];
let[hobbit, ranger, wizard] = fellowship;
console.log(hobbit, ranger, wizard);

let array1 = [100, 200, 300, 400, 500];
let [a1, ...b1] = array1;
console.log(a1, b1);

let wizard1 ={magical: true, power: 10};
let{ magical, power} = wizard1;
console.log(magical, power);

//variables already set but wanna reasign
let magical1 = false;
let power1 = 7;

let wizard2 ={magical1: true, power1: 10};
({ magical1, power1 } = wizard2);
console.log(magical1, power1);

//arrow function
//by default, anonymous!
setTimeout(() => {
  console.log('gone!');
}, 2000);
//setting as a variable name blastoff equals a function
const blastoff = () => {
  console.log('blastoff!');
}
blastoff();
//arrow functions do not bind their own this -> it means it doesn't create one variable this, so it is bound to global or function around it.

//map methooood
let points = [100, 200, 300];
let addTen = (element) => {
  return element + 10;
}
points = points.map(addTen);
console.log(points);
//inside map function

points = points.map(element => {
  return element + 1;
});

console.log(points);
//shorter version
points = points.map(element => element + 5);
console.log(points);
//filter methooood
//
// let pass = (element) => {
//
// }

let scores = [1, 2, 3, 4, 5, 6];
let pass = scores.filter(element => element <= 3);
console.log(pass);
//more methods : find(), forEach()<- similar to map function, reduce(), some(), keys(), values()
console.log(students, total);
//modules
console.log(multiply(3,5));
//class
// class Entity {
//   constructor(name, height, land){
//     this.name = name;
//     this.height = height;
//     this.land = land;
//   }
//
//   greet(){
//     console.log(`hi! I'm ${this.name} from ${this.land}!!!!!!`);
//   }
// }
//
// let Merry = new Entity("Merry", 4.6, "middle earth");
// Merry.greet();
//class extention
import Entity from './entity';

class Hobbit extends Entity{
  constructor(name, height, land) {
    super(name, height, land);

    //this.state = {};
  }
  greet(){
    console.log(`you don't know me? I'm ${this.name} from ${this.land}`);
  }
}

let Frodo = new Hobbit("Frodo Baggins", 4.3, "shire");
console.log(Frodo);
Frodo.greet();

class App extends Component {
  render() {
    return (
     <div> React JS and JSX</div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
