//FUNCTIONS

//VALIDATE USER INPUT

//verify valid: 1-9 or A-F & 3 or 6 char long

var validate_input = function (str) {
	var valid_hex = /^[a-f0-9]{6}$/i; 
	if(!valid_hex.test(str)) {
		alert("Please enter a valid hex code. Valid hex values are 6 characters long and contain the numbers 1-9 and/or letters A-F");
		return false;
	} else {
		return true;
	}
}


//TRANSFORM USER INPUT (string to array of int)

//make input letters lowercase & convert string to array

var input_array = function (str) {
	var str_cap = str.toLowerCase();
	var arr = str_cap.split("");
	return arr;
}

//convert any letters to numbers

var convert_array = function (arr) {
	var arr = arr; 
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === "a") {
			arr[i]=10;
		} else if (arr[i] === "b") {
			arr[i]=11;
		} else if (arr[i] === "c") {
			arr[i]=12;
		} else if (arr[i] === "d") {
			arr[i]=13;
		} else if (arr[i] === "e") {
			arr[i]=14;
		} else if (arr[i] === "f") {
			arr[i]=15;
		} else {
			arr[i]=arr[i];
		}
	}
	return arr;
}


//convert strings in array to integers 
var int_array = function (arr) {
	var arr = arr;
	for (var i = 0; i < arr.length; i++) {
		arr[i] = parseInt(arr[i],10);
	}
	return arr;
}

//MIX COLORS

//mix colors - average arrays, convert "mixed" array to string


var mixed_color = function (arr1, arr2) {
	var arr = [];
	for (var i = 0; i < arr1.length; i++) {
		arr[i] = Math.round((arr1[i] + arr2[i]) / 2) ; //round for valid hex numbers - 50/50 mix
	}
	var str = arr.join(""); //convert back to string
	return str;
}







