


function validationName(){
    let nameerror=document.getElementById("firstName_error");
    let name=document.getElementById("firstName");

    if(name.value.trim() == ""){
        nameerror.innerHTML = "Firstname cannot be blank";
        return false;
    }else if(name.value.length < 5){
        nameerror.innerHTML = "firstname must not be lessthan 5 character.";
        return false;

    }else{
           nameerror.innerHTML = "";
           return true;
    }
}

function validationlast(){
    let lastNmaeError = document.getElementById("lastName_error");
    let lastName = document.getElementById("lastName");

    if(lastName.value.trim() == ""){
        lastNmaeError.innerHTML = "lastname cannot be blank";
        return false;
    }else{
        lastNmaeError.innerHTML = "";
           return true;
    }

}

function validationemail(){
    let email=document.getElementById("inputEmail");
    let emailError=document.getElementById("email_error");
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.trim()==""){
        emailError.innerHTML="Email cannot be blank";
        return false;
    }else if(!email.value.match(regExp)){
        emailError.innerHTML="Email is not in global format.";
        return false;
    }else{
        emailError.innerHTML = "";
        return true;
    }

}
function validationpassword(){
    var password=document.getElementById("inputPassword");
    let passworderror=document.getElementById("password_error");
    let pasRegExp = /^[A-Za-z]\w{7,14}$/;
        
    if(password.value.trim() == ""){
        
         passworderror.innerHTML="password cannot be blank";
       
         return false;
   
    }else if(!password.value.match(pasRegExp)) {
        passworderror.innerHTML = "password is not in global format ";
        return false;

    } else {
        console.log(password.value);
        passworderror.innerHTML = "";
        return true;

    }  

}

function  validationConfirmPassword(){
    var password = document.getElementById("inputPassword");
    let confirm = document.getElementById("confirmPassword");
    let cerro = document.getElementById("confirm_error");

    if(password.value != confirm.value){
        console.log(password.value);
        console.log(confirm.value);
        cerro.innerHTML="password is not same.";
        return false;
      
       
    }else{
        console.log(password.value);
        console.log(confirm.value);
        cerro.innerHTML="";
        return true;  
            
    }



}

function validation(){
    let checkbox= document.getElementById("inputCheck");
    let tick= document.getElementById("confirm");
    if(!validationName()  || !validationlast() || !validationemail() || !validationpassword() || !validationConfirmPassword()){
       console.log("not scucess");
        return false;

    }else if(!checkbox.checked) {
        tick.innerHTML = " please agree privacy policy";
        return false;
    }else {
        tick.innerHTML="";
         console.log("scucess");
        return true;
    }
}