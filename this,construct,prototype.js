
	function Circle(radius) {
		
		this.radius = radius;
		// this.getArea = 
		// function(){
		// 	return Math.PI *Math.pow(this.radius,2);
		// };
	};
		//Prototype
		Circle.prototype.getArea =
		 function() 
		{
			return Math.PI *Math.pow(this.radius,4);
		};

		var myCircle = new Circle(10);
		console.log(myCircle);

		var myOtherCircel = new Circle(20);
		console.log(myOtherCircel);

		