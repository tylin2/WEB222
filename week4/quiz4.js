function shopping_cart(aname,price,quantity){
    this.name=aname;
    this.sum=price*quantity;
}

var product1=new shopping_cart("milk",2,2);
var product2=new shopping_cart("eggs",3,3);
var total = 0;
for (var sum in shopping_cart) {
    total += shopping_cart[sum];
}
console.log(total);