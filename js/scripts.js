// //busines logic
// piza constructor
 function Pizza (size, meat, veg, extra) {
   this.size = size;
   this.meat = meat;
   this.veg = veg;
   this.extra = extra;
   this.price = "";
 }
// pizza formula
 Pizza.prototype.pizzaPrice = function(){
   return this.size + this.meat + this.veg + this.extra;
 }

//user interface logic
// create var and parseInt size, meat, veg, extra, price
