		

	// ( function (){ })();
	// using IIFE
	//Used for the global access of variable like we want to use the object ,function, variable of all of these are of same value type then we are use IIFE which help to call the exact thing which you want to execute or perform in the code.



	(function(window) {
		var Markgreeter = {};

	 Markgreeter.name = "Mark";
	 var greeting = "Hello";
	Markgreeter.sayHello =  function () {
		console.log(greeting +Markgreeter.name);
	}

	window.Markgreeter  =Markgreeter;
	})(window);