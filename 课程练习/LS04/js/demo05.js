/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());// function or object
console.log(typeof new Array());	 // function or object
console.log(typeof new Date());	 // function or object

