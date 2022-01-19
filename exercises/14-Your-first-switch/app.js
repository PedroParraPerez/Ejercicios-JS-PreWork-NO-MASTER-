let colorname = prompt('What color do you want?').trim();





const getColor = (selection) => {
	switch(selection){
		case 'red': const x = () => {return true} 
		x()
		
			
	
			break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	                   
	}
}

let isAvailable = getColor(colorname);

if(isAvailable){
	console.log('Good news! That color is available');
}
	
else{
	console.log('We are sorry, that color is not available');
} 
console.log(isAvailable)
