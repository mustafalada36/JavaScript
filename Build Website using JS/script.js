
	// console.log(window.document.getElementById("title"));
	// console.log(document instanceof HTMLDocument);
	// console.log(window.document.getElementById("name");
	// console.log(This is called as DOM Manipulation in single page web application);

	function saysomething(){
		var name = document.getElementById("name").value;

		// var message = "<h2>Hello  " +name +" !</h2>";

		var message = "<h2>" +name +"</h2>";

			 document.getElementById("content").innerHTML = message;


			 if (name === "student && Student") {
			 	var title  = document.querySelector("#title").textContent;
			 	title += " and more Lecture:";
			 	document.querySelector("#title").textContent = title;

			 }
	}