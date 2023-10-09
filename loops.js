let sum = 0
for (let number = 1; number <= 5; number++) {
	if (number == 3){
		//break
		continue
	}
	sum = sum + number
	console.log(sum)
}

/*
const prompt = require('prompt-sync')({sigint: true});

/*
let sum = 0
let number = prompt('Insert number: ');
while (number != ''){
	sum = sum + parseInt(number)
	console.log(sum)
	number = prompt('Insert number: ');
}


let sum = 0
let number = prompt('Insert number: ');
do {
	sum = sum + parseInt(number)
	console.log(sum)
	number = prompt('Insert number: ');
} while(number != '')
*/