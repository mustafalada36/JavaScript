 var x = "Hello World! My First JS code";
 
 var message="In Global";

 var a = function  (){
 	var message="Inside a";
 	console.log("message a:" +message)

 	 var b= function (){
 	console.log("message inside b:" +message)
 }

 b();
 }
 a();

  var b= function (){
 	console.log("message inside b:" +message)
 }

 b();

