function firstWord(s) {
  // your code here
	let splitStr = s.trim().split(" ");
	return splitStr[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))


