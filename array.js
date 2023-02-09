	 
	 // var array = new Array();
	 // array[0]= "Mustafa";
	 // array[1]= 21;
	 // array[2]= {
	 // 	name:"Ali"

	 // };
	 // array[3] = function f1(value) {
	 // 	console.log("The Value is: ");
	 // }

	 // console.log(array[2]);

	 //Another way for creating array

	 // var names = ["Ali", "Ahmad","Muhammad"];
	 // var names = [{
	 // 	name:"Ali"
	 // }
	 // , { 
	 // 	name:"Ahmad"
	 // }
	 // ,
	 // {
	 // 	name:"Muhammad"
	 // }];


	 // console.log(names[1].name);
	 var myObject = {
	 	name:"Ali",
	  
	 	course:"JS",
	
	 	Platform:"Coursera"
	 };
	 for(var prop in myObject){
	 	console.log(prop +":" +myObject[prop]);
	 }
