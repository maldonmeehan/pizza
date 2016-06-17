// //busines logic
// pizza constructor
 function Pizza (size, meat, veg, extra) {
   this.size = size;
   this.meat = meat;
   this.veg = veg;
   this.extra = extra;
   this.price = "";
 }
// contact constructor
 function Contact(first, last, street, city, state, zip) {
   this.firstName = first;
   this.firstName = first;
   this.lastName = last;
   this.street = street;
   this.city = city;
   this.state = state;
   this.zip = zip;
 }
// pizza prototype formula
 Pizza.prototype.pizzaPrice = function(){
   return this.size + this.meat + this.veg + this.extra;
 }
 // contact prototype formula
 Contact.prototype.fullName = function() {
   return this.firstName + " " + this.lastName;
 }
 Contact.prototype.fullAddress = function() {
   return this.street + "," + this.city + "," + this.state + "," + this.zip;
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
