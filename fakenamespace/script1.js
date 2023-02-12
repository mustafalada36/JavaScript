		

	// ( function (){ })();
	// using IIFE
	//Used for the global access of variable like we want to use the object , function, variable of all of these are of same value type



	(function(window) {
		var Markgreeter = {};

	 Markgreeter.name = "Mark";
	 var greeting = "Hello";
	Markgreeter.sayHello =  function () {
		console.log(greeting +Markgreeter.name);
	}

	window.Markgreeter  =Markgreeter;
	})(window);