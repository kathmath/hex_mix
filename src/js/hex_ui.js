
// //initial display
// var color1 = "ffffff"; //starts white
// var color3 = "777777"; //starts grey
// var color2 = "000000"; //starts black

function mix() {

//get colors from user & validate

	var user_input1 = document.getElementById("user_input1").value;
	//validate_input(user_input1);
	var user_input2 = document.getElementById("user_input2").value;
	//validate_input(user_input2);

	//use user input colors, mix 

	var color1 = int_array(lett_to_num(input_array(user_input1)));
	var color2 = int_array(lett_to_num(input_array(user_input2)));
	var color3 = arr_to_str(num_to_lett(mixed_color(color1, color2, 75)));
	var color4 = arr_to_str(num_to_lett(mixed_color(color1, color2, 50)));
	var color5 = arr_to_str(num_to_lett(mixed_color(color1, color2, 25)));

	//put colors into html elements

	var background_color = function (color, id) {
		document.getElementById(id).style.backgroundColor = "#" + color;
		document.getElementById(id).innerHTML = "#" + color;
	}

	background_color(user_input1.toUpperCase(),"color1_chip");
	background_color(user_input2.toUpperCase(),"color2_chip");
	background_color(color3, "color3_chip");
	background_color(color4, "color4_chip");
	background_color(color5, "color5_chip");

}

	/*
	//inject into HTML & CSS

	//create color chips
	var color1_chip = document.createElement("div");
	var color2_chip = document.createElement("div");
	var color3_chip = document.createElement("div");

	//modify color chips
	color1_chip.className = "chip";
	color2_chip.className = "chip";
	color3_chip.className = "chip";*/

