
var mix_button = document.getElementById("mix");

function mix() {

//get colors from user & validate

	var user_input1 = document.getElementById("user_input1").value;
	var check_input1 = validate_input(user_input1, "user_input1");
	var user_input2 = document.getElementById("user_input2").value;
	var check_input2 = validate_input(user_input2, "user_input2");

	if(check_input1 && check_input2) {
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

}

//events
mix_button.onclick = mix;

//errors


	