//-----------------OBJECTS AND PROTOTYPES--------------------

//What are objects? --->  real world entities containing PROPERTIES AND METHODS 

//What are classes? ---> classes are blurprint for any object or what object will contain 


class person {
    constructor(name){                 //PARAMETERIZED CONTRUCTOR 
        this.name = name ;
        console.log(this.name);
    } 
}

const p1 = new person("ayush");
const p2 = new person("saurabh");

console.log(p1.__proto__);    //this will only run on a web page 
//this will result in an object that will contain all its methods 

//If you dont define a constructor in a class a default empty constructor will be created 

p1.__proto__ = null ;  //This will remove all the self made methods from p1 object

//What happens by using a new keyword? ---> Parent class ka prototype uthoa and new object ke __proto__ me dall do 


//-----------------EXTENDS WILL PASS ALL THE IN BUILD METHODS TO B-----------
class A {
    constructor(name , name2){
        this.name = name + name2;
    }
}

class B extends A{

}

//----------------SAME CAN BE DONE BY-----------------
// Question :- so inheritence without using extends 
B.__proto__ = A.__proto__;     //this works same as extend 




//-------------------IN JAVASCRIPT EVERYTING IS AN OBJECT-------------------- 
let arr = [1,2,3,4];
console.log(arr.__proto__);      //-->this is an object and everyting like this 
