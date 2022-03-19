function  clearErrors() {
    document.getElementById('errors').innerHTML = "";           
} 

function formValidationExample() {

    clearErrors();            

    var result = FirstNameFunction();  
    result = Educationlv() && result;
    result = EducationSta() && result;  

    return result;
}

function FirstNameFunction() {
    var passAlpha = false;
    var capString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var inputValue = document.info.FirstName.value;
    if (capString.indexOf(inputValue.substr(0,1))>= 0) {        
        for (var i = 0; i < inputValue.length; i++) {            
            if (inputValue.match("^[a-zA-Z]*$")) {
                passAlpha = true; 
            }else{
                passAlpha=false;
                errors.innerHTML += "<p>Please enter only alphabet.</p>";
                break;                
            }
        }             
    }
    else{
        errors.innerHTML += "<p>Please start with a cap.</p>";
        passAlpha=false;
    }
    return passAlpha;    
}

function Educationlv(){
    var passvalue = false;
    var inputValue = document.info.EducationLevel.value;
    if(inputValue!=0){
        passvalue = true;
    }else{
        passvalue=false;
        errors.innerHTML += "<p>Education Level must be selected.</p>";
    }
    return passvalue;
}

function EducationSta(){
    var passvalue = false;
    var inputValue = document.info.EducationStatus.value;
    if(inputValue ==1){
        passvalue = true;
    }else{
        passvalue=false;
        errors.innerHTML += "<p>Education Status must be selected.</p>";
    }
    return passvalue;
}