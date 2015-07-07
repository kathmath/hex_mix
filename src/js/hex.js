//FUNCTIONS

//VALIDATE USER INPUT

//verify valid: 1-9 or A-F & 3 or 6 characters long

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

//make input letters uppercase & convert string to array

var input_array = function (str) {
	var str_cap = str.toUpperCase();
	var arr = str_cap.split("");
	return arr;
}

//convert any letters to numbers

var lett_to_num = function (arr) {
	var arr = arr; 
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === "A") {
			arr[i]=10;
		} else if (arr[i] === "B") {
			arr[i]=11;
		} else if (arr[i] === "C") {
			arr[i]=12;
		} else if (arr[i] === "D") {
			arr[i]=13;
		} else if (arr[i] === "E") {
			arr[i]=14;
		} else if (arr[i] === "F") {
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

//mix colors - multiply elements, convert "mixed" array to string


/*var mixed_color = function (arr1, arr2) {
	var arr = [];
	for (var i = 0; i < arr1.length; i++) {
		arr[i] = Math.round((arr1[i] + arr2[i]) / 2) ; //round for valid hex numbers - 50/50 mix
	}
	return arr;
}*/

var mixed_color = function (arr1, arr2, percent) {
	var arr = [];
	var percent = percent/100;
	for (var i = 0; i < arr1.length; i++) {
		arr[i] = Math.round(percent * arr1[i] + (1-percent) * arr2[i]) ; 
	}
	return arr;
}

//convert any 2-digit numbers to letters

var num_to_lett = function (arr) {
	var arr = arr; 
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 10) {
			arr[i]="A";
		} else if (arr[i] === 11) {
			arr[i]="B";
		} else if (arr[i] === 12) {
			arr[i]="C";
		} else if (arr[i] === 13) {
			arr[i]="D";
		} else if (arr[i] === 14) {
			arr[i]="E";
		} else if (arr[i] === 15) {
			arr[i]="F";
		} else {
			arr[i]=arr[i];
		}
	}
	return arr;
}


//convert array to string

var arr_to_str = function (arr) {
	var arr = arr;
	var str = arr.join(""); //convert back to string
	return str;
}





