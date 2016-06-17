// //busines logic
// pizza constructor
 function Pizza (size, meat, veg, extra) {
   this.size = size;
   this.meat = meat;
   this.veg = veg;
   this.extra = extra;
   this.price = "";
 }

// pizza prototype formula
 Pizza.prototype.pizzaPrice = function(){
   return this.size + this.meat + this.veg + this.extra;
 }

//user interface logic
$(document).ready(function() {
  $("form#order-piza").submit(function(event){
    event.preventDefault();
    var size =parseInt($("#size").val());
    var meat =parseInt($("#meat").val());
    var veg =parseInt($("#veg").val());
    var extra =parseInt($("#extra").val());
    var newPizza = new Pizza(size, meat, veg, extra);
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
    $("#show-price").show();
    $("#price").text(newPizza.pizzaPrice());
  });
});
