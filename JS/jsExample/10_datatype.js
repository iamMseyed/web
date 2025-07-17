/*
String
Number
BigInt
Boolean
undefined
Symbol
null
object 
 -- object datatype contains objects, arrays, promises, maps, sets

*/

let value1='Value1';
let value2='values2';

console.log('Value1 as :'+value1);

let num1 = 1;
let num2 = 2.3;

let bigint1 = BigInt('1234567890123456789012345678901234567890'); // BigInt literal , BigInt() only rememeber it is case sensitive
let bigint2 = BigInt(1234567890123456789012345678901234567890); // not accurate, as js will trim this to Number.MAX_SAFE_INTEGER (2^53 - 1 or 9007199254740991).
let bigint3 = 1234567890123456789012345678901234567890n; // BigInt literal with 'n' suffix

console.log('typeof:' + typeof(bigint1) + ':value:'+  bigint1);
console.log('typeof:' + typeof(bigint2) + ':value:'+  bigint2);
console.log('typeof:' + typeof(bigint3) + ':value:'+  bigint3);


if(bigint1==bigint2){
    console.log('BigInt1 is equal to BigInt2');
}else
{
    console.log('They aint');
}


let b = true;
let c = false;

const person = {
    firstName:"First Name",
    lastName:"Last Name",
    age:25
};

console.log('Person`s first name is : ' + person.firstName);
const arr = [1,2,3,'this','who',12.3];


const date = new Date('2023-10-01T00:00:00Z'); // ISO 8601 format

console.log(date);


