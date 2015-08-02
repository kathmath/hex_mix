
function find_color() {

//get colors from user & validate

	var user_red = document.getElementById("user_red").value;
	//validate_input(user_red);
	var user_blue = document.getElementById("user_blue").value;
	//validate_input(user_blue);
	var user_blue = document.getElementById("user_green").value;
	//validate_input(user_green);

	//use user input colors, mix 
	var user_color = user_red + user_green + user_blue;

	//put colors into html elements

	var background_color = function (color, id) {
		document.getElementById(id).style.backgroundColor = "#" + color;
		document.getElementById(id).innerHTML = "#" + color;
	}

	background_color(user_color, "user_color");

}


