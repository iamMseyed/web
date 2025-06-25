var val = 'Hey outside function in global scope';

function calFun(val) {
     var val = 'hayo';
     let help = 'help';
     console.log(`Ho ${this.val}`);
     console.log(`Hello ${val}`);
     console.log(`He ${help}`);
}

calFun(val);

// console.log(`This is var from inside of functions: ${help}`); // won't be available here thus will throw error


function blockLevelVar() {
    // declare variable in local scope
    var message = "local";
    console.log(`-------------------------`);
    if (true) {
        console.log('var related')
        // declare block-level variable
        var message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

blockLevelVar();


function noBlockLevelLet() {
    // declare variable in local scope
    let message = "local";
    console.log(`-------------------------`);
    if (true) {
        console.log('let related')
        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

noBlockLevelLet();


function noBlockLevelConst() {
    // declare variable in local scope
    const message = "local";
    console.log(`-------------------------`);
    if (true) {
        console.log('let related')
        // declare block-level variable
        const message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

noBlockLevelConst();

function hoistingCheckVar(){
    console.log(`----------var---------------`);
    x=10;
    var x;
    console.log(`${typeof(x)} and value is ${x}` );

}

hoistingCheckVar(); 

function hoistingCheckLet(){
    console.log(`-----------let-------------`);
    x=10;
    let x;
    console.log(`${typeof(x)} and value is ${x}` );

}

// hoistingCheckLet(); 

function hoistingCheckConst(){
    console.log(`-----------const--------------`);
    x=10;
    const x=10;
    console.log(`${typeof(x)} and value is ${x}` );

}

// hoistingCheckConst(); 


// display number
console.log(number);
var number = 5;

// Output: undefined

console.log(`Get factorial of a number`);

function calculateFactorial(num) {
    let result=1;
    for(let i=num;i>0;i--){
         result=result*i;}
         return result;

}

console.log(calculateFactorial(5)); // Output: 120


console.log('count till 1');

function countTillOne(count) {

    if(count>0){
        console.log(`Counting down from ${count}`);
        count--;
        if(count>0)
        countTillOne(count);
    }else 
        return;
}
countTillOne(5);


// recursive function
function factorial(num) {

    // base case
    // recurse only if num is greater than 0
    if (num > 1) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    };
};

let x = 3;

// store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);

console.log(`Fibonacci series till n number with out recursion`);
function fibonacciWORecursion(n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    let a = 0, b = 1, temp;
    console.log(`${a}, ${b}`);
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
        console.log(`${temp}`);
    }
    
    return b;
}
console.log(fibonacciWORecursion(5));

console.log(`Fibonacci series till n number with recursion`);
function fibonacciWithRecursion(n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2);
}

console.log(fibonacciWithRecursion(5));


function objectExample (){
    const laptop={
        name:'Dell',
        model:'XPS 13',
        price: '1000$',
        color: 'Silver',
    }
    console.log(laptop.name);
    console.log(laptop['color']);
}


objectExample();

function objectExample1 (){
    const laptop={
        name:'Dell',
        model:'XPS 13',
        price: '1000$',
        color: 'Silver',
    };
    return laptop;
}

const varr = objectExample1();
console.log(varr.model);

function personDetails(){
    const perDet = {
        name: 'who',
        model: 'which',
        color: 'when',
        price: 123,
        get: function abc() {
            return `name: ${this.name}, model: ${this.model}, color: ${this.color}, price: ${this.price}`;
        }
    };
    return perDet;
}

const cal = personDetails();
console.log(cal.get());

const dup = {
    'name':'nameOne',
    'age':12,
    'gender':'male',
    'date':new Date()
};

const dupDup = dup;

dupDup.age=13;

console.log(`dupDup age is ${dupDup.age} and dup age is ${dup.age}`);

console.log(dup.date);
delete dup.date;
if(dup.date == null){
    console.log(`dup.date is null and is currently : ${dup.date}`);    
}else console.log(`dup.date is not null: ${dup.date}`);


console.log('--------------- Nested Objects--------------');

const nestedObj = {
    'name':'nameValue',
    'age':12,
    address:{
        'addressOne':'address value one',
        'addressTwo':'address value two'
    }
}

console.log(`address is :${nestedObj.address.addressOne}`);

console.log(nestedObj.address.addressOne.toUpperCase());


console.log('----------Object.values()-----------');

const perr = {
    'name':'val1',
    'age':12,
    'gender':'male'
}

let text = '';

for (let x of Object.values(perr)){ // object.values() return array
    text = text + x + ' ';
}

console.log('1 '+text);

let trimText = text.trim();
console.log('2: '+trimText);


text = '';

for(let x in perr){
    text = text + perr[x]+ ' ';
}

console.log(text);
console.log(text[11])


const person123 = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person123);
console.log(myArray[0]);


console.log('-------------Object.entries()--------------')

const objEnt= {
    val:'value1',
    age:12,
    salary:0.0
}

// initialize 
let text1 ='';

for (let [entity, value] of Object.entries(objEnt)){
        text1 = text1 + entity + ':' + value +'\n'
}

console.log(text1)

// don't inititalize

let text2 ;

for (let [entity, value] of Object.entries(objEnt)){
        text2 = text2 + entity + ':' + value +'\n'
}

console.log(text2) // will define value of undefined because text2 is not initialized at start.


console.log('-----------JSON Stringfy----------');

const str={
    key1:'key1',
    key2:'key2',
    key3:'key3'
}

let stringfiedObject = JSON.stringify(str);

console.log(stringfiedObject);

console.log('--------------Object constructor functions-------------');


function Person(one, two, three){
    this.one = one;
    this.two=two;
    this.three=three;
}


const per1 = new Person('val1','val2','val3');
const per2 = new Person('val1a','val2b','val3c');

console.log(per1.one);

function fun(one, two, three){
    this.one = one;
    this.two = two;
    this.three = three;
}

const fun1 = new fun('value1','value2','value3');
const fun2 = new fun('vall1','vall2','vall3');
console.log(fun1.two);


fun1.nationality='unknown'; //added only to fun1 object not fun constructor

console.log(fun1.nationality);


fun.gender = 'male'; //this won't add to function constructor

console.log(fun2.gender); // undefined
console.log(fun1.gender); // undefined


fun.prototype.age = 12; // this will be added to function constructor

console.log(fun1.age);


console.log('---------built in js constructors----------');

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

console.log('The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.');

console.log(`
Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().`);


console.log(`
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function`);


console.log('---------------Programmiz Excercise--------------');


const student ={
    'name':'What name',
    'age':20,
    'gender':'male'
}

console.log(student.name);

console.log(student['gender']);

const hospital={
    'patName':'patients name',
    'ward':'A-12',
    'health condition':'fair',
    getPatientInfo:function(){
       console.log(hospital.patName);
       console.log(this.patName);
    }
}

hospital.getPatientInfo();


/*
Challenge:
Write a function to create a simple flash card.

You are given two strings question and answer.
Return an object with the question and answer paired together.
For example, if question = "What is the capital of France?" and, answer = "Paris", the expected output is { Question: "What is the capital of France?", Answer: "Paris" }.

function createFlashCard(question, answer) {

}

*/

function createFlashCard(que, ans) {
    const quesAns={
        'queInside':this.que, 
        'ansInside':this.ans,
        'queWithoutThis':que,
        'ansWithoutThis':ans
    }
    return quesAns;
}

console.log(createFlashCard('Question','answer'));

console.log('-----Object methods------');

// assign() -> used to copy properties from one object to other

const obj1 = {
    'name':'name1',
    'age':12,
    'gender':'male'
}

const obj2= {
    'name':'name2',
    'age':22
}

Object.assign(obj1,obj2); //properties of obj2 assigned to obj1 
console.log(`obj1 is : ${Object.entries(obj1)}`);
console.log(`obj1 is : ${Object.entries(obj2)}`);

console.log('------ Constructor Object ------'); // The constructor property returns the function that created the Object prototype.
const ppp = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let tt = ppp.constructor;
console.log(tt);

console.log('-------- Create object -----');

const pp = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let newObj = Object.create(pp); // new object

newObj.fullname = newObj.firstName + newObj.lastName;

console.log(`full name is ${newObj.fullname}`);

console.log(Object.entries(newObj));

console.log('---- Define properties ----'); // adds, modify, provides getter and setter methods of properties

const p11 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

Object.defineProperties(p11,{
    age:{value:30},
   eyeColor: {value:'black',enumerable:true} // only this will get updated in Object.entries()
});

console.log(Object.entries(p11));


console.log('---- Define property ----'); // adds, modify, provides getter and setter methods of a single property

const p12 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

Object.defineProperty(p12,
    "age",{value:30} // just one property
);

console.log(Object.entries(p12));



console.log('---- object.entries ----'); // returns an array of the key/value pairs of an object.

const p13 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let output1 = Object.entries(p13);

let output2 = '';
for(let [person,value] of Object.entries(p13)){
    output2+= person + ": "+ value + "\n";
}

console.log(output2);


console.log('--------- freeze methods -------------'); // this will freeze this objects and no modifications will be allowed

const p14 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

Object.freeze(p14);

p14.newKey = 'newValue';
console.log(p14);

let data = '';
for( let [key, value] of Object.entries(p14)){
    data+= key + ': '+value +'\n';
}

console.log(data);


console.log('--------- fromEntries methods -------------'); // method creates an object from a list of key/value pairs/arrays

const p15 = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const abc = Object.fromEntries(p15);
console.log(abc);


console.log('--------- getOwnPropertyDescriptor() and getOwnPropertyDescriptors()  methods -------------'); // returns the property descriptors of an object.

const p16 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

let abcd = Object.getOwnPropertyDescriptor(p16,'age');
console.log(abcd);

let descriptors = Object.getOwnPropertyDescriptors(p16);
console.log(descriptors);


console.log('---------- getOwnPropertyNames()----------') // returns an array with the properties of an object.

const propName={
    'firstName':'firstName',
    'lastName':'lastName',
    'age':21
}
let pn = Object.getOwnPropertyNames(propName);
console.log(pn);


console.log('----------------groupBy---------------')//  groups elements of an object according to string values returned from a callback function.

const groupExp=[
    {'name':'apples','quantity':300},
    {'name':'mango','quantity':100},
    {'name':'orange','quantity':150},
    {'name':'kiwi','quantity':200}
];

function myCallbackFunction({quantity}){
    return quantity >= 150 ? 'GtThnHun' : 'LessThenHun';
}

const groupBy = Object.groupBy(groupExp, myCallbackFunction);
console.log(groupBy)

console.log('--------------- isExtensible -----------');// allows modifications, but prevents addition of properties only

const perEx = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(perEx);


perEx.newName='Hey';
// this will print undefined
console.log(perEx.newName);


let answer = Object.isExtensible(perEx);
// This will return false
console.log(answer);

console.log(perEx.firstName);

delete perEx.firstName;

console.log(perEx.firstName);

console.log(perEx.lastName);
perEx.lastName = 'Doe Updated'
console.log(perEx.lastName);


console.log('--------------- freeze -----------');// prevents modifications, additions and deletions of properties.

const perFroz = {
    firstName:"John",
    lastName:"Doe"
};

// freezes the object
Object.freeze(perFroz);

perFroz.newName='Hey';
// this will print undefined
console.log(perFroz.newName);
let ansFroz = Object.isFrozen(perFroz);

console.log(perFroz.firstName); // john
perFroz.firstName='johnFrozenUpdated'; // will do nothing as is frozen
console.log(perFroz.firstName); //jobn

delete perFroz.firstName;
console.log(perFroz.firstName); //jobn

// This will return false
console.log(ansFroz);


console.log('-------------- Seal -------------'); // allows modifications, but prevents additions and deletions of properties.

const perSeal = {
    firstName:"John",
    lastName:"Doe"
};

// seals the object
Object.seal(perSeal);

perSeal.newName='Hey';
// this will print undefined
console.log(perSeal.newName);
let ansSeal = Object.isSealed(perSeal);

console.log(perSeal.firstName); // john
perSeal.firstName='johnFrozenUpdated'; // will update 
console.log(perSeal.firstName); //jobn

delete perSeal.firstName; // won't delete
console.log(perSeal.firstName); //jobnupdated

// This will return false
console.log(perSeal);


console.log('------------- Keys ------------');

// Create an Object
const personKeys = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(personKeys); // Object.values() returns values, Object.entries() returns keys and values both
console.log(keys)

console.log('------------------- Prototype ---------------'); //  is a global property available with all JavaScript objects.

function employeePrototype(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employeePrototype.prototype.salary = 2000;

const fred = new employeePrototype("Fred Flintstone", "Caveman", 1970);

console.log(fred);

console.log(fred.salary);