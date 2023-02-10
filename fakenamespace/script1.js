		

	// ( function (){ })();
	// using IIFE




	(function(window) {
		var Markgreeter = {};

	 Markgreeter.name = "Mark";
	 var greeting = "Hello";
	Markgreeter.sayHello =  function () {
		console.log(greeting +Markgreeter.name);
	}

	window.Markgreeter  =Markgreeter;
	})(window);