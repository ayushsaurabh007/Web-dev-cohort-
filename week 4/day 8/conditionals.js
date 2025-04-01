//if else 
let marks = 80 ;
let grade;
if(marks >= 90){
    grade = "A";
}else if (marks >= 80){
    grade = "B";
}else{
    grade = "E";
}



//switch case 
switch (grade){     
    case "A":
        marks=90;
        break;
    case "B":
        marks=80;
        break;
    default :
        marks = 40;
        break;
}




//ternary operator 
let age = 18;

let vote = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
