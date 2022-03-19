/*string*/
var str="This is a big string";
var str1="This,is,a,big,string";
console.log(str.length);
console.log(str[8]);
console.log(str.charAt(10));
console.log(str.concat(" and its ...."));
console.log(str.includes("Big"))
console.log(str.includes("big"));
console.log(str.slice(0,4)); //slice(starting index,how many char. after the index)
console.log(str.split(" "));
console.log(str.split("s"));
var arr=str.split("s");      //why we need split
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(str1.split(","));
console.log("--------------------------------------------------");
/*array*/
var arr=[];
arr[4]=7;
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("*********");
var arr1=[1,2,3,8];
console.log(arr1.indexOf(3));
arr1.push(5);
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
arr1.pop(3);
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log("*********");
var arr2=[5,6,7,8];
var arr3=arr.concat(arr2);
for(var i=0;i<arr3.length;i++){
    console.log(arr3[i]); 
}
console.log("*********");
var arr4=["This","is","a","string"];
console.log(arr4.join(" "));
console.log("*********");
var num=[1,4,9];
var roots=num.map(
    function(num){
        return num*num;
    }
);
for(var i=0;i<roots.length;i++){
    console.log(roots[i]);
}
console.log("--------------------------------------------------");
/*RegExp*/
var str2="welcome to Toronto";
var pattern =/Me/;
var pattern1=/Me/i;
console.log(pattern.test(str2));
console.log(pattern1.test(str2));
console.log("*********");
var str3="welcome to Toronto";
var pattern3 =/to/i;
var pattern4 =/to/gi;
console.log(str3.match(pattern3))
console.log(str3.match(pattern4))
console.log("*********");
var str4="welcome to Toronto";
var pattern5 =/to/gi;
console.log(str4.replace(pattern5,"<TO>"));
console.log("*********");
var pattern6=/^([0-9]{3}[-]){2}[0-9]{4}$/;

console.log("*********");