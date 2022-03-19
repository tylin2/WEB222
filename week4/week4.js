//object using literal notation
var person4={
    name:"James",
    age:30,
    talk:function(){
        return this.name+" "+this.age+" "+this.profession; //i can call profession!!
    }
};
console.log(person4.age);
console.log(person4.talk());//profession cannot be shown here...
console.log("_______________________");
person4.name="Michael";
console.log(person4.name);
console.log("_______________________");
person4.profession="Teacher";
console.log(person4.profession);
console.log(person4.talk());
console.log("_______________________");
var person3=Object.create(person4);
console.log(person3.name);
person3.name="Robert";
console.log(person3.name);
console.log(person3.age);
person3.age=20;
console.log(person3.name);
console.log(person3.age);
console.log("_______________________");
for(var x in person4){
    console.log(x+": "+person4[x]);
}
console.log("---------------------------------------");
function person(aname,aage){
    this.name=aname;
    this.age=aage;
    this.show=function(){
        return this.name+", "+this.age+", "+this.profession;
    };
}
var person1=new person("Peter",25);
person1.profession="Mechanic";
console.log(person1.profession);
console.log(person1.show());
var person2=new person("Mary",18);
console.log(person2.name);
console.log("**************");
person.nationality="Canadian"; //Using function constructor, 
console.log(person1.nationality); //I cannot add a property after the definition of the object
console.log("**************");
console.log(person1.nationality);
person.prototype.nationality="Taiwanese";
console.log(person1.nationality);
console.log("**************");
person.prototype.talk=function(){return this.age+this.name+this.nationality};
console.log(person1.talk());
console.log("**************");
for(var x in person1){
    console.log(x+person1[x]);
}
console.log("---------------------------------------");
// the following example stores two car objects in an array and then prints the array with the key and value pairs 
var cars = [];
var Car = {
  make:"",
  model:"",
  year:""
};
var toyota = Object.create(Car);
toyota.make = "Toyota";
toyota.model = "Corolla";
toyota.year = "2017";
cars.push(toyota);
var honda = Object.create(Car);
honda.make = "Honda";
honda.model = "Civic";
honda.year = "2018";
cars.push(honda);
var str = "";
for(var i = 0; i<cars.length;i++){
	for (var x in cars[i]) { 
    str += x + ": " + cars[i][x] + "\n\t"; 
  }
}
console.log(str);
console.log("---------------------------------------");


