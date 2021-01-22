// kilometerToMeter
 function kilometerToMeter(km){
     var distance = (km * 1000);
     return distance;
 }
 var result =kilometerToMeter(10);
 console.log(result);
 budgetCalculator
 function budgetCalculator(Watch,Mobile,Laptop){
     var watchPrice  = 50;
     var mobilePrice = 100;
     var laptopPrice = 500;
     var watchCost   = Watch  * watchPrice;
     var mobileCost  = Mobile * mobilePrice;
     var laptopCost  = Laptop * laptopPrice;
     var totalCost = (watchCost + mobileCost + laptopCost);
     return totalCost;

 }
 var total = budgetCalculator(2,3,1);
 console.log(total);

// hotelCost
 function hotelCost(Package){
     var firstpackage    = 100;
     var seconedpackage  = 80;
     var thirdpackage    = 50;
     if(Package<=10){
         var cost1 = Package * firstpackage;
         console.log(cost1);
     }else if(Package>10 && Package<=20){
         var cost2 = ((Package-10) * seconedpackage + 1000);
         console.log(cost2);
     }else{
         var cost3 = ((Package-20) * thirdpackage + 1800);
         console.log(cost3);
    }
 }
 console.log(hotelCost(12));
// megaFriend
 function megaFriend(Friends_list) {
     var max = Friends_list[0].length;
     Friends_list.map(v => max = Math.max(max, v.length));
     result = Friends_list.filter(v => v.length == max);
     return result;
   }
  
console.log(megaFriend(['Kawser', 'Karim', 'Rahim','Abdullah','Samad']))