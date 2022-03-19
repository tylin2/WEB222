var str="This is a string";
var s=0;
var arraystr=str.split(' ');
for(var i=0;i<str.length;i++){
    if(str[i]=="s"){
        s++;
    }      
}
console.log(arraystr);
console.log(s); 
