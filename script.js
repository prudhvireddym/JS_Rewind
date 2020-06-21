//Inline comment

/* Multi line

comment*/

//Different types of variables are undefined,null,int,string,symbol,

//There are mainly 3 ways of declaring variables in Js

var myName = "prudhvi" //var has scope throughout the project


let name = "pru" //Does not have throughtout scope like var

const pi = 3.14 //Once declared const cannot be changed


//////////////////////////////////////////////// Storing valuses with assignment operators ///////////////////////////////////////////

var a = 7 //Any variable must be declared before gettng assigned

console.log(a)

a++; //a is incremented

console.log(a)

a+=10 //Adding 10 to a

console.log(a)

///////////////////////////////////////////// Strings /////////////////////////////////////////////////////////////////////////////////


var myString ="this is a double quoted string\"This is a statement inside the string\"" //Here a backslash - \ can be used as an escape character
console.log(myString)

var newString ='this is a double quoted string "This is a statement inside the string"' //Same like python we can use double quotes outside and single quotes inside
console.log(newString)

var anotherString = "This is first like \n\tThis is the second line \n\\This is the third line"
console.log(anotherString)

var anotherString2 = "this is the first line " + "This is the second line" //Concatinating string using + sign
console.log(anotherString2)

var anotherString3 = "this is the first line "
anotherString3 += "This is the second line" //Concatination using += sign
console.log(anotherString3)

anotherString2 += anotherString3
console.log(anotherString2) //Concatinationg two strings

console.log(anotherString2.length) //Length is used to find the length of the string

//Using index to access any letter in as tring is same as in python

//Strings are imutable - once created their individual charecters cannot be changed

lastLetterOfAnotherString3 = anotherString3[anotherString3.length-1] //To get last letter in a string4

/////////////////////////////////////////Arrays///////////////////////////////////////////////////////////////////////////

//Arrays and multi dimentional arrays are same as lists in python

var myArray = ["Dog",23,"lalj"]
myArray.shift() //Unlike pop shift can be used to remove the first element ofthe array
console.log(myArray)

myArray.unshift("Hello") //Unlike push unshift can be used to add elemt to the begining of the array
console.log(myArray)


//////////////////////////////////////////////// Functions Examples //////////////////////////////////////////////////////////
function heyThere(){
    console.log("How you doin mate")

}

heyThere()
heyThere()

//sCOPE OF THE VARIABLES ARE ALS SIMILAR TO OTHER LANGUAGES
//If we have a same name of global and local variable the function will always take the value of the local variable


// Que - que is an abstract data structure where items are kept in order. New items are added to the back of the que and old items are added to the front of the que
// JSON.stringify(array) - This can be used to stringify any array
//Implimenting a que with a function

newArray = [3,4,5,6]
function queImplimentation(array,num){
    array.push(num)
    return array.shift()

}
console.log("The items first in the array:" +JSON.stringify(newArray))
console.log("The items removed from the array:"+queImplimentation(newArray,7))
console.log("The items first in the array:" +JSON.stringify(newArray))

// '==' equality operatot , '===' strict equality operator
// '==' - equality operator converts both the coparing values to a single type and then compare, where as '===' strict equality operator does not do the type conversion
// 3 === 3 - Evaluates to true, where as | 3 === '3' - Evaluates to flase | 3=='3' - Evaluates to true
// Same like equaltity operator '!=' operator does type conversion | '!==' - Strict inequalty operatoe also checks if its not true but is not going to conver types

// and is python is represented with '&&' in Java script
//or is also same as in c with '||' in JS
 
//elif in python is represented with 'else if' in JS

//Switch syntax:
var animal = "rabbit"
switch(animal){
    case "dog":
        console.log("The animal is dog");
        break;
    case "cat":
        console.log("The animal is cat");
        break;
    case "monkey":
        console.log("The animal is monkey");
        break;
    default:
        console.log("Do not know the animal");
        break;
}

//Dictionaries in JS are called Objects eg
var myDog = {
    "name":"jypsey",
    "legs":3,
    "tail":1,
    "toys list":["archie","bluedoll",2]
}
//There are mainly two main ways to access the properties
//Accessing properties with dot notation
var nameOfDog = myDog.name
console.log(nameOfDog)

//Accesing object properties with bracket notation
var toysOfDog = myDog["toys list"]//Maily used when there is a space in the name
console.log(toysOfDog)

//Changing values in an object
myDog.name ="Scoprio"
console.log(myDog.name)

//Adding new properties to an object
myDog.bark ="Bow Bow" // or we can also do myDog['bark'] = "Bow Bow"

//Deleting properties froman object
delete myDog.tail

//seeing if objects has a property
if(myDog.hasOwnProperty("legs")){
    console.log(true) 
}else{
    console.log(false) 
}

//We can also add objects inside an array

//Accesing nested objects in JS
var myCar = {
    "inside":{
        "Dashboard":"Keys",
        "Charger Port":"Phone"

    },
    "outside":{
        "Trunk":"Jack",
        "Back door":{
            "Seats":2,
            "Seat Belts":2
        }
    }
}

var noOfSeatbelts = myCar.outside["Back door"]["Seat Belts"]
console.log(noOfSeatbelts)

/////////////////////////////////////////////////////////////////For loop example/////////////////////////////////////////////////////////

var myArray =[]

for(var i =0;i<10;i++){
    myArray.push(i)
}

console.log(myArray)

///////////////////////////////////////////////////////////////Do While ////////////////////////////////////////////////////////////////
//Do while loop exicutes ateast once before checking the condition
//eg

do {
    i++
}while(i<10)

//////////////////////////////////////////////////Generating  Random/////////////////////////////////////////////////////////////////////
console.log(Math.random())
console.log(Math.floor(Math.random() *20)) //Creating a random whole number between 0 and 20

console.log(parseInt("33")) //convert string to int

////////////////////////////////////////////////Ternery Operator////////////////////////////////////////////////////////////////////////
//Ternery operator is a one line if else statement
// condition ? statement-if-true : statement-if-false

var a =5
var b =6
console.log(a>b?a:b) //If else

//Nested ternery operator 
function checkNum(num){
    return num>0 ? "Positive" : num<0 ? "Negative" : "Zero" 
}

console.log(checkNum(0))

//Forlong time variables were declared using var keyword starting with Es6 we can declare them with let and const keywords

//let doesnot allow declaring the same variable twice
"use strict" //Using strict allows us to catch common coading mistakes and unsafe actions

//Let keyword scope is only whithin the function that its declared in while var scope is throughout the function or global

//Const also has all the features of let but once declared its value can not be modifies
//We can modify a const array using its indexes
//Since we can still modify arrays or objects decraed in constand we can absolutely freeze them using 
var PI = 3.14159
Object.freeze(PI)

///////////////////////////////////////////////////////////// Arrow Functions ///////////////////////////////////////////////////////

//A function without any name is called anonymous function we can also write an arrow funtion in an annonymous fuction more easily

var names = function(){
    return 2+3
}
console.log(names)

//We can write the above function as below arrow function
var namesArrow = () => 2+3
console.log(namesArrow)

//Arrow Function with args

var myConcat = function(a1,a2){
    return a1.concat(a2)
}
console.log(myConcat([1,2,3],[5,6,7]))

var myArrowConcat = (a1,a2)=>a1.concat(a2);

console.log(myArrowConcat([1,2,3],[5,6,7]))


//Arrow funtion work really well with higher order function, whenever one function takes another function as an argument its a good time for an arrow function
//Higher order functions - MAP, FILTER, REDUCE - They take functions as arguments for processiong collections of data

var realNumArray = [-2,4,-1,0,7.6,12,23.4]

var squareList = (a1) =>{
    var squaredInteger = a1.filter(num => Number.isInteger(num) && num>0).map(x => x*x)
    return squaredInteger
}

console.log(squareList(realNumArray))

//Rest operator allows us to create a function With variable number of arguments - ...
// ...args - converts all the passed in arguments into array called args
var sumOfNumbers = (...args) =>{
    
    return args.reduce((a,b)=>a+b)
}

console.log(sumOfNumbers(1,2,3,4,6))

//Using spread operator to evaluate arrays in place
//spread operator looks same like rest operatior but its used mainly to spread an array into its individual elements
//eg spread operator
var ar1 = ["Jan","Fed","Mar"]
var ar2 = [...ar1] //we are spreading out all elements in array1 and loding in array2

///Destructuring assignment to assign variables from objects
const Avg_temp ={
    today:32,
    tmro:41,
    day_after:{min:10,max:25}
}

var tmrotemp = (arg)=>{
    const {tmro:tempOfTmro} = arg //Using desctructing assignment to assign variables from object
    const {day_after:{max:Max_of_day_after}} = arg //Desctructuring assignment of nested objects
    return Max_of_day_after 
}
console.log(tmrotemp(Avg_temp))


//Destructuring arrays

const [z,x,,y] = [1,2,3,4]
console.log(z,x,y)


//Combining rest operator and array destructuring together

var [,,...firstTwoElemMissingArray] = [1,2,3,4,5,6,7,8,9]
console.log(firstTwoElemMissingArray)


//Using desturuxcturing to pass object as a function argument
const apiVal = {
    max:55,
    min:32,
    avg:43.5,
    time:"now"
}
var func = ({max,min})=>{
    console.log("In the function:",max,min) //Here we used the keys in the object to get the value directly
    return (max+min)/2
}
console.log(func(apiVal))//Here we passed the object as the argument


//Creating strings with template literals -template literals are the strings declared between these - ` ` 
//The advantages of using template literals is we can declare multiline comments and also use javascript inbetween eg -

const person = {
    name:"Prudhvi",
    age:23
}

let greetings = `Hello my name is ${person.name} 
and my age is ${person.age}` //Multiline string and we defined JS in beteeen using ${}

console.log(greetings)

//An object can also contain  a function
var bicycle = {
    gears:2,
    setGears:function(gear){ //We can also write the above line as - setGear(gear){
        this.gears = gear
    }
}
bicycle.setGears(3)
console.log(bicycle.gears)


//Using class syntax to define a constructor function
class SpaceShuttle{
    constructor(targetPlanet){
        this.targetPlanet=targetPlanet
    }
}
var zeus = new SpaceShuttle('jupiter')

console.log(zeus.targetPlanet)

//using getters and setters to control access to an object
// a variable starting with an underscore eg "_name" is a private variable that can not be accessed outside the scope of the class
//getters and setters are used to get and set objects values

//Difference between import and require
//import {functionName} from "./filename" - import syntax
//export {functionname}
//export var varname = "some Name" - Exporting function 
//import * as someName from "./filename" - impoet everthing in a file
//export default - export default thing when there is no other export
//import name from "./filename" - for default import we do not need to put curley braces