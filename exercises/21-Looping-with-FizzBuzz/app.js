function fizzBuzz() {  
	var counter = 0;

while (counter < 100) {
	counter++;
	
	if (counter % 15 === 0) {
		console.log('Fizzbuzz')
	} else if (counter % 5 === 0) {
		console.log('Buzz')
	} else if (counter % 3 === 0) {
		console.log('Fizz')
	} else {
		console.log(counter);
	}
	
}
}

fizzBuzz();