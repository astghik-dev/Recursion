
///Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers

function giveGreatComDiv(arg1,arg2,n = Math.min(arg1,arg2)) {

	if (n == 1 || (arg1%n == 0 && arg2%n == 0)) {
		return n;
	} else {
	return	giveGreatComDiv(arg1,arg2,n-1);
	} 

	myFunc();
}
console.log(giveGreatComDiv(27,9));




//Write a JavaScript program to get the integers in range (x, y)

var makeArray = function (start,end) {
	if (end - start == 2) {
		return [start+1];
	} else {
	
	var myArray = makeArray(start,end-1);
	myArray.push(end-1);
	return myArray;
    }
}

console.log(makeArray(1,9));
