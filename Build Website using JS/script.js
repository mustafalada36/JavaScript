
	// console.log(window.document.getElementById("title"));
	// console.log(document instanceof HTMLDocument);
	// console.log(window.document.getElementById("name");
	// console.log(This is called as DOM Manipulation in single page web application);

	function saysomething(event){
		var name = document.getElementById("name").value;

		var message = "<h2>Hello  " +name +" !</h2>";
		//OR Second WAY
		var message = "<h2>" +name +"</h2>";

			 document.getElementById("content").innerHTML = message;

			 //use three equal to comparison of ...
			 if (name === "student " || name === "Student") {
			 	var title  = document.querySelector("#title").textContent;
			 	title += " and more Lecture:";
			 	document.querySelector("#title").textContent = title;

			 }
	}

	//By Control handling
		document.querySelector("button").addEventListener("click", saysomething);

	//Second way
	// document.querySelector("button").click = saysomething;