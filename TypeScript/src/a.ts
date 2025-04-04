// let x:number=1;
// x=2;
// console.log(x);

// function greet(firstName:string,lastName:string,age:number) {
//   console.log("Hello " + firstName + lastName + " and my age is" +age);
// }

// greet("Sravan","Surya",20)

// function sum(a:number,b:number):number{
//     return a+b;
// }

// const value:number  = sum(2,4);
// console.log(value);

// function isLegal(age: number) {
//   if (age >= 18) return true;
//   else return false;
// }

// let x = isLegal(16);
// let y = isLegal(18)
// console.log(x);
// console.log(y);

// function runAfter1S(fn:()=>void){
//     setTimeout(fn,1000);
// }

// runAfter1S(function(){
//     console.log("Hi there")
// })

// const greet = (name: string) => `Hello, ${name}!`;

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function isLegal(user: User) {
//   if (user.age > 18) {
//     return true;
//   } else return false;
// }

// isLegal({
//     firstName:"Sravan",
//     lastName:"Surya",
//     age:20
// })

// Array in TS:
// Given an array of positive integers as input, return the maximum value in the array

// function maxValue(arr: number[]) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(maxValue([1, 2, 3]));

// // Given a list of users, filter out the users that are legal (greater than 18 years of age)

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// function filteredUsers(users: User[]) {
//   return users.filter((x) => x.age >= 18);
// }

// console.log(
//   filteredUsers([
//     {
//       firstName: "harkirat",
//       lastName: "Singh",
//       age: 21,
//     },
//     {
//       firstName: "Raman",
//       lastName: "Singh",
//       age: 16,
//     },
//   ])
// );

// Enum in TS
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

// enum Direction{
//   Up,
//   Down,
//   Left,
//   Right
// }

// function doSomething(keyPressed:Direction){

// }
// doSomething(Direction.Up);
// console.log(Direction.Up);

// enum Direction{
//   Up=1,
//   Down,
//   Left,
//   Right
// }

// function doSomething(keyPressed:Direction){

// }

// doSomething(Direction.Down);
// console.log(Direction.Down);

// enum Direction{
//   Up="Up",
//   Down="Down",
//   Left="Left",
//   Right="Right"
// }

// function doSomething(keyPressed:Direction){

// }

// doSomething(Direction.Down);
// console.log(Direction.Down);

// Generic:Ts

// function getFirstElement(arr:(string | number)[]){
//   return arr[0];
// }
// const el = getFirstElement([1,2,3]);
// console.log(el);

// function identity<T>(arg:T):T{
//   return arg;
// }
// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);
// console.log(output1);
// console.log(output2);

function getFirstElement<T>(arr:T[]){
  return arr[0];
}
const el = getFirstElement(["sravan","surya"]);
console.log(el.toUpperCase());




