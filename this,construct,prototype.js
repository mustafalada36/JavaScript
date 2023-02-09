
	function Circle(radius) {
		
		this.radius = radius;
		this.getArea = function(){
			return Math.PI *Math.radius(this.radius,2);
		};
	};

		var myCircle = new Circle(20);
		console.log(myCircle);