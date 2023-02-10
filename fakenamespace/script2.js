	


	// ( function (){ })();
	// using IIFE

	
	(function(window) {
	var Woodgreeter = {};

	 Woodgreeter.name = "Wood";
	 var greeting = "Hi";
	Woodgreeter.sayHi =  function () {
		console.log(greeting +Woodgreeter.name);
	}

	window.Woodgreeter = Woodgreeter
})(window);