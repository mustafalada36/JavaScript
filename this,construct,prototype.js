
	function Circle(radius) {
		
		this.radius = radius;
		this.getArea = 
		function(){
			return Math.PI *Math.pow(this.radius,2);
		};
	};

		Circle.prototype.getArea2 =
		 function() 
		{
			return Math.PI *Math.pow(this.radius,4);
		};

		var myCircle = new Circle(10);
		console.log(myCircle.getArea());

		console.log(myCircle.prototype.getArea2);