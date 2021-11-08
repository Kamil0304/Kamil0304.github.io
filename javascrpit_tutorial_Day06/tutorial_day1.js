function x(){
var x=10;
function fun() {
 console.log(x);
 x = 20;
 if (x > 0) {
 var x = 30;
 console.log(x);
 }
 var x = 40;
 var f = function(x) {
 console.log(x); 
 }
console.log(50);
} //run it

fun();
console.log(x);
}

x();

function findMax() { 
    var i; 
    var max = -Infinity; 
    for (i = 0; i < arguments.length; i++) { 
    if (arguments[i] > max) { 
    max = arguments[i]; 
    } 
    } 
    return max; 
    } 
    var y = findMax(1, 123, 500, 115, 44, 88); // 500
    var x = findMax(5, 32, 24); // 32
    console.log(y);
    console.log(x);

    var k = (x,y)=>{ return x*y};
    console.log(k(10,80))


    var foo = 10;
function bar() {
//if (!foo) {
//var foo = 10;
//}
console.log(foo);
}
bar();

    
