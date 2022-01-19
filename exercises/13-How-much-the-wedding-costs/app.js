let guests = prompt('How many people are coming to your wedding?');

const  getPrice = (guests) =>{
    let cost = 0;
   if(guests <= 50){
       cost = 4000
   }
   if(guests > 50 && guests <= 100){
       cost =10000
   }
   if(guests > 100 && guests <=200 ){
       cost = 15000
   }
   if(guests > 200){
       cost = 20000
   }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
