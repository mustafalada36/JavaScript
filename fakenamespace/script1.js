		

	// ( function (){ })();
	// using IIFE
	//Used for the global access of variable like we want to use the object , function, variable 



	(function(window) {
		var Markgreeter = {};

	 Markgreeter.name = "Mark";
	 var greeting = "Hello";
	Markgreeter.sayHello =  function () {
		console.log(greeting +Markgreeter.name);
	}

	window.Markgreeter  =Markgreeter;
	})(window);