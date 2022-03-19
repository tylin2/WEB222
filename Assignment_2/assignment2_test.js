//phonenumber
var changephoneform =function(phoneNumber){
    var str=String(phoneNumber);
    var phoneinform='('+str[0]+str[1]+str[2]+') '+str[3]+str[4]+str[5]+'-'+str[6]+str[7]+str[8]+str[9];
        return phoneinform;
};
console.log("changephoneform:");
console.log(changephoneform('1234567890'));
//username
var getusername=function(firstName,lastName){ 
    var step1;
    if(lastName.length>=4){
        step1=firstName[0]+firstName[1]+lastName[0]+lastName[1]+lastName[2]+lastName[3];
    }else{
        step1=firstName[0]+firstName[1]+lastName;
    }
    var username=step1.toUpperCase();
    return username;
};
console.log("getusername:");
console.log(getusername('John','Smithson'));
console.log(getusername('Dan','Min'));

var userList=[];
    var user={
        firstName:"",
        lastName:"",
        creditScore:"",
        isStudent:"",
        phone: "",
        birthDate: "",
    };
    var Lisa = Object.create(user);
    Lisa.firstName = "Lisa";
    Lisa.lastName="Lin";
    Lisa.creditScore = 123;
    Lisa.isStudent = "Ture";
    Lisa.phone="1234567890";
    Lisa.birthDate="1993-10-08T15:34:45Z"
    userList.push(Lisa);
    var Eva = Object.create(user);
    Eva.firstName = "Eva";
    Eva.lastName="Chan"
    Eva.creditScore = 234;
    Eva.isStudent = "ture";
    Eva.phone="2345678901";
    Eva.birthDate="1993-10-08T15:34:45Z"
    userList.push(Eva);
    var Kim = Object.create(user);
    Kim.firstName = "Kim";
    Kim.lastName="Kim";
    Kim.creditScore = 345;
    Kim.isStudent = "false";
    Kim.phone="3456789012";
    Kim.birthDate="1989-02-03T07:34:45Z"
    userList.push(Kim);
    var IU = Object.create(user);
    IU.firstName = "IU";
    IU.lastName="Lee";
    IU.creditScore = 456;
    IU.isStudent = "False";
    IU.phone="4567890123";
    IU.birthDate="1993-10-08T15:34:44Z"
    userList.push(IU);

//count
getUserCount= function(userList) {    
    var count;
    if (userList==null||userList==undefined) {
        count=0;            
    } else {
        count=userList.length;
    }
    return count;
};
console.log("getUserCount:");
console.log(getUserCount(userList));

getStudents= function(userList) {
    var result = userList.filter(student);
    return result;
        
};
function student(ture) {
    var test=ture.isStudent.toLowerCase();   
    return test=="ture";
}
console.log("getStudents:");
console.log(getStudents(userList));


getUsersWithGoodCredit= function(userList, minScore) {
    
    var goodcredit=userList.filter(testfunction=>testfunction.creditScore<=minScore);
    return goodcredit;
};
console.log("getUsersWithGoodCredit:");
console.log(getUsersWithGoodCredit(userList,200));

setUsernames= function(userList) {
    var firstnamearr=[];
    var lastnamearr=[];    
    userList.forEach(function(element) {
        firstnamearr.push(element.firstName);
        lastnamearr.push(element.lastName);
    });
    for(var i=0; i<firstnamearr.length; i++){
        userList[i].username=getusername(firstnamearr[i],lastnamearr[i]);
    } 
    return userList;
};
console.log("setUsernames:");
console.log(setUsernames(userList));

getPhoneList= function(userList) {
    var newarry = userList.map(user =>{ 
        var newform = {
            name:"",
            phone:""
        };
        newform.name = user.firstName+" "+user.lastName;
        newform.phone=changephoneform(user.phone)
        return newform;
     });    
    return newarry;   
};
console.log("getPhoneList:");
console.log(getPhoneList(userList));
sortByDateOfBirth= function(userList) {
    return userList.sort(function(a, b) { 
        if (a.birthDate < b.birthDate) {
          return 1;
        }
        if (a.birthDate > b.birthDate) {
          return -1;
        }
    });     
             
};
console.log("sortByDateOfBirth:");
console.log(sortByDateOfBirth(userList));

