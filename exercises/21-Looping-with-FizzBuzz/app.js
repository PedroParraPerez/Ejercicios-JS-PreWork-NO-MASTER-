const fizzBuzz = () => { 
	
	for(i = 1; i <= 30; i++){
		i++;
		
		
	} 
}


const  conditional = (i) =>{
	let modulo3 = i%3 == 0
	switch(i){
		case modulo3: return console.log("Fizz"); 
				break;
		case (i%5 == 0): return "Buzz"; 
				break;
		case (i%3 == 0 && i%5 == 0): return "FizzBuzz"; 
				break;
		default: return i; 
				 break;
	}
}
conditional(3)
