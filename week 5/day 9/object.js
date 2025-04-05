//-------------------------OBJECTS IN JAVASCRIPT------------------------------

//normal definition of object 
//key value pair 

let person = {
    name : "ramesh",
    age : 18 ,
    occupation : "software engineer",
    isHappy : true
};


//nested objects 
let person2 = {
    name : "suresh",
    age : 19 ,
    occupation : "doctor",
    isHappy : true,
    address : {
        city : "patna",
        state : "bihar",
        near : "gandhi-maidan"
    }
}

//----------HOW TO ACCESS DATA FORM OBJECTS----------------
//console.log(person.name) ;     //ramesh
//console.log(person2.address.city);      //patna


//-----------OBJECTS ARE STORED IN HEAP----------
//objects can grow in size so it is not kept in stack as it can give stack overflow 
//let myobj = {....} ; will store the address where the object is actually stored 
let obj1 = {
    brand : "chai code",
    content : "excellent"
}
//---------------PASS BY REFERENCE---------------
let obj2 = obj1;
obj2.brand = "chai and code";  //this will change the original obj1.brand also
//console.log(obj1);


//---------PASS BY VALUE---------
let dialog = "say my name"
let dialog1 = dialog;   //but this will not change the original arr
dialog1= "loki";
//console.log(dialog);


//----------------------COPYING AN OBJECT IN JAVASCRIPT---------------------
//Two methods of copying an object 1> shallow copy  and 2> deep copy 
//What is shallow copy ? :- the copyied element is not a new variable but the address where the variable is stored 
//What is deep copy ? :- the copyied element is a new variable 

let myobject = {
    name : "Ayush saurabh",
    age : 20 
}

let myobject2 = myobject; 
//console.log(myobject2);

//========SHALLOW COPY========
myobject = {
    name : "Ayush saurabh",
    age : 20 ,
    address : {           //nest 1
        city : "Patna",
        state : "Bihar",
        local : {         //nest 2
            road : "baily road",
        }
    }
}
//In this case the fist part of the object will be deepcopy but the first nest will be shallow copy 
myobject2 = {
    ...myobject
}
// myobject2.address.state="goa";
// console.log(myobject2.address.state);  //goa
// console.log(myobject.address.state);   //goa


//----------------DEEP COPY------------
myobject2 = JSON.parse(JSON.stringify(myobject));
myobject2.address.state="goa";
console.log(myobject2.address.state);  //goa
console.log(myobject.address.state);   //Biahr
