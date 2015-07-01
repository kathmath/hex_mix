
//initial display
var color1 = "ffffff"; //starts white
var color3 = "777777"; //starts grey
var color2 = "000000"; //starts black

//get colors from user & validate

var user_input1 = prompt("What color do you want to start with? Valid hex values are 6 characters long and contain the numbers 1-9 and/or letters A-F");
validate_input(user_input1);
var user_input2 = prompt("What color do you want to mix it with? Valid hex values are 6 characters long and contain the numbers 1-9 and/or letters A-F");
validate_input(user_input2);


//call functions on color1 & color3 

var color1 = int_array(convert_array(input_array(user_input1)));
var color2 = int_array(convert_array(input_array(user_input2)));
var color3 = mixed_color(color1, color2);


//inject into HTML & CSS

var background_color = function (color, id) {
	
	document.getElementById(id).style.backgroundColor = "#" + color;
	
	document.getElementById(id).innerHTML = "#" + color;
}

background_color(user_input1,"color1");
background_color(user_input2,"color2");
background_color(color3, "color3");

