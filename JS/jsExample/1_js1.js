
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("demo").innerHTML = "Hello, World!";
});
             
function buttonCall(){
    document.getElementById('demo').innerHTML = 'Is there after button call';
 }   
function b2(){
    document.getElementById('dem2').innerText = 'Is there after button 2 call';
}

function b3(){
    window.alert('This is an alert from button 3');
     // window object is global scope object thus is opitional
}

function b4(){
    console.log('This is an alert from button 3'); 
    // window object is global scope object thus is opitional
}

function b5(){
    document.write('Hello there');
    // document.write('Hello there'); // This will overwrite the entire document
}

function b6(){
    window.alert('Hello there');
}

function b7(){
    console.log('Hello there');
}

function b8(){
    let x,y,z;
    x=5;y=6;z=x+y;

    let $abc=123;
    alert(z+$abc);

    let _abc = 'Hi';
    let _aBc = 'Hello';
    alert(_abc+_aBc);
}

function varLetConst(){
    var x = 10;
    let y = 20;
    const z = 30;
    x=20; // this is ok
    y=30; // this is ok
    // z=40; // this is error
    var x=40; // this is ok, but it will not change the value of x outside this block 
    // let y=30; //  cannot redeclare y, but can change its value
    alert('x is :'+ x + ' y is : ' + y + ' z is : ' + z);

    function innerFunction() {
        var a = 50; 
        let b = 60; 
        alert('Inner function a is :'+ a + ' b is : ' + b);
    }
    a=40
    var bs=50;
    alert('outside inner function:'+ ' a is :'+ a + ' b is : ' +b);
    alert('Thus var inside function is not accessible outside the function, but let is');
    alert('But if we declare a varible as var, then we can change same variable again, but not with let or const');
    let b=40;
    const d = 10;
    d=30;
}