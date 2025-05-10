let fruits = ["apple" , "mango" , "cherry"];

//REDUCE METHOD IN JAVASCRIPT
const arr = [1,2,3,4];

let sum = arr.reduce( (acc , curr ) => {acc + curr});

let max = arr.reduce( (acc , curr) => {
    if(acc >= curr){
        return acc;
    }else{
        return curr;
    }
});

console(sum) ; //10
console(curr) ; //4

//------------------------------OBJECTS AND PROTOTYPES--------------------------------

//What are objects?  ---->  real world entities containing PROPERTIES AND METHODS

//What are classes? -----> classes are bueprint for any object or we can say what object will contain 


class person {
    constructor(name){         //PARAMETERIZED CONSTRUCTOR
        this.name = name;
        console.log(name);
    }
}

const p1 = new person ('ayush');
const p2 = new person ('aryan');

console.log(p1.__proto__);  //output will be {}   as this will only run on web browser and will give you all the methods of p1

//What happens by using a new keyword ? ----> Parent class ka prototype uthao and new object ke __proto__ me dall do

//---------------------------EXTENDS KEYWORD WILL TAKE ALL THE USER DEFINED METHOS IN PARENT CLASS AND COPY IT IN CHILD CLASS ----------------------------
class A {
    constructor(fname , lname){
        this.name  = fname + lname;
    }
}


class B extends A{
    constructor(age){
        this.age = age;
    }
}

//---------------------------SAME CAN BE DONE BY -------------------
B.__proto__ = A.__proto__;

//--------------------IN JAVASCRIPT EVERYTHING IS AN OBJECT---------------------
let array = [1,2,3,4];
console.log(array.__proto__);     //--> this is an object and mostly everything in javascript is an object 

