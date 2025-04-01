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

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else return false;
}

isLegal({
    firstName:"Sravan",
    lastName:"Surya",
    age:20
})
