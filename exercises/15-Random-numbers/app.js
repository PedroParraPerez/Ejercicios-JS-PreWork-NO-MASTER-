/*Exercise closely resembles 11 - consider introducing another concept here? */

const getRandomInt = () =>{
	var randomNumber = Math.floor(Math.random()*(10 - 1 + 1) + 1);
	return randomNumber;
}


console.log(getRandomInt());