const RandonNumbers = () => {
	return Math.floor(Math.random()*(4-1+1)+1)
   }
   RandonNumbers()
   
   const  getColor = (colorNumber) =>{
	   colorNumber = parseInt(colorNumber);
	   switch(colorNumber){
		   case 1: return "red"; 
				   break;
		   case 2: return "yellow"; 
				   break;
		   case 3: return "blue"; 
				   break;
		   case 4: return "green"; 
				   break;
		   default: return "black"; 
					break;
	   }
   }
   
   const LoopRandonNumbers = () => {
	 for(i = 1; i <= 10; i++){
	 var exampleColor = getColor(RandonNumbers());
	 console.log(exampleColor)
	 }
   }
   LoopRandonNumbers()

