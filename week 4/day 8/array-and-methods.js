//---------------------ARRAYS IN JAVASCRIPT-------------------



//declaration of array 
let array = ["one" , "two" , "three"];




//-----------------------------DIFFERENT METHODS IN JAVASCRIPT--------------------------------


//splice method 
array.splice(0,1,1);   //will delete from 0 , delete 1 item , and replace it with 1 
console.log(array);

//pop method
let pop = array.pop();     //will pop the last element and store it in pop variable 

//push mehtod
array.push("four");    //will push "four" at the end of the array 

//forEach method
array.forEach((element)=>{      //will iterate through the array and will print all the elements 
    console.log(element);
})

//concat method 
array = ["one" , "two" , "three"];
let arr = ["four" , "five" , "six" , 7];
array = array.concat(arr);  //[ 'one', 'two', 'three', 'four', 'five', 'six' , 7]


//indexOf method
let idx = array.indexOf("four");  //idx will contain 3

//findIndex method 
let match = array.findIndex((element) => {
    element > 1;
})

//flat method
arr = ["one" , "two" , "three" ,["four" , ["five" , "six" ]]];
arr.flat();         //["one" , "two" , "three" ,["four" , "five" , "six" ]]

//sort method
arr.sort();         //[ [ 'four', [ 'five', 'six' ] ], 'one', 'three', 'two' ]


//reverse method 
array.reverse()       //[7,'six','five',  'four','three', 'two','one']
