let hello=function () {
console.log("hello world");
}
console.log(hello(),'question1');

let add=function(num1,num2){
    return num1+num2;
}
console.log(add(1,2),'question2');

//using ternary operation
let evenOrOdd = function (number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
};
console.log(evenOrOdd(28),'question3');
let arry1=['a','b','c','d','e'];
console.log (arry1.length,'question5');
//radnom number between 1 and 20 and round to the lowest full number
let random1=function(min,max) {
  return Math.floor(Math.random()*(max-min + 1))+min;
};
console.log(random1(1,20),'question6');
//round to 2 decimal places.
let number6= function(num6,num7){
    return num6 * num7;
}
console.log(number6 (2.44,2.999).toFixed(2),'question7');
//sqaure root of number
let sqaure=function(a){
    return a*a;
}
console.log(sqaure(20),'question8');
// sum of two positive integer
let sumOfPos=function(a1,b){
    if( a1&&b>=0){
    return a1+b;
}
else {
    return "not postive numbers";
}
}
console.log(sumOfPos(1,-2),'question9');

//length of string
let lengthOfString='developing country';
console.log(lengthOfString.length,'question11');
//toUpperCase
let upperCase1='Abebe';
console.log(upperCase1.toUpperCase(),'question 12');
//checking substring in string
let string1='Javascript is great apps';
console.log(string1.includes('Java'), 'question13');
console.log(string1.replace('Javascript','paython'),'question14');
//removing whitespaces using trim method
let orginalString=' Javascript is Great ';
let newString=orginalString.trim();
console.log(newString,'question15');
console.log(orginalString,'question15');
//Filter negative numbers
let numbersNegative=[0.009,1,-20,234,90,-15];
 onlyNegative = numbersNegative.filter
(function(x) {
    return x < 0;
});
console.log(onlyNegative,'question16');

    // return increment by 1 function
    let result=function(a){
        return a+1;
    }
console.log(result(2),'question19');
//multiplyby 3

 let multiply=function(a){
    return a*3;
 }
 console.log(multiply(3),'question20');

 let firstNumber= function(z){
    return z[0];
    }
 let arrNumber= [2,5,3];
 let firstDigit=firstNumber(arrNumber);

 console.log(firstDigit,'quesiton21');
 let teamPoints=function(twopoints,threepoints){
    return twopoints*2 + threepoints*3;
 }
console.log(teamPoints(4,6),'question22');
//taking two numbers to check less than 30
function lessThan (x1,x2) {
    if (x1+x2 < 30)
    {
    return true;
}
   else {
    return false
}
};


console.log(lessThan(100,5),'question23');
//checking numbers equal
function isEqual(x2,x3){
    if(x2===x3){
        return true;
    }
    else{
        return false;
    }

}
console.log(isEqual(6,5),'question24');

function stringCount(x4,x5){
    if(x4.length == x5.length){
return true;
    }
else {
    return false;

}
    }
    console.log(stringCount('abb','zbb'),'question26');

function divisibleByFive(x6){
    if(x6 % 5==0){
    return true;

    }
    else{
        return false;
    }
}
console.log(divisibleByFive(3),'question 27');







