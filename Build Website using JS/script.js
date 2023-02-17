
	// console.log(window.document.getElementById("title"));
	// console.log(document instanceof HTMLDocument);
	// console.log(window.document.getElementById("name");
	// console.log(This is called as DOM Manipulation in single page web application);

	function saysomething(){
		var name = document.getElementById("name").value;

		// var message = "<h2>Hello  " +name +" !</h2>";

		var message =  name ;

			 document.getElementById("content").innerHTML = message;

	}