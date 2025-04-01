"use strict";
// let x:number=1;
// x=2;
// console.log(x);
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else
        return false;
}
isLegal({
    firstName: "Sravan",
    lastName: "Surya",
    age: 20
});
