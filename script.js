 var message="In Global";
 var a = function  (){
 	var message="Inside a";
 	console.log("message a:" +message)
 }
 a();

 var b= function (){
 	console.log("message inside b:" +message)
 }

 b();