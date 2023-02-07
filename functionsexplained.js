
	function multiply(a,b) {
		return a*b;
	}
	console.log(multiply(3,4));
	 multiply.version = 3.0;
	console.log(multiply.version);

	//Function Factory

	function makemultiplier (multiplier){
		var myFunc = function (c){
			return multiplier*c;
		}
	}