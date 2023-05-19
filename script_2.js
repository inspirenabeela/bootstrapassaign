   function validationpassword(){
    let password=document.getElementById("inputPassword");
    let passworderror=document.getElementById("password_error");
    let pasRegExp = /^[A-Za-z]\w{7,14}$/;
    console.log(password.value);
    if(password.value.trim() == ""){
         passworderror.innerHTML="password cannot be blank";
         return false;

    } else {
        passworderror.innerHTML = "";
        return true;

    }  

}
   function validationName(){
    let nameerror=document.getElementById("firstName_error");
    let name=document.getElementById("userName");
    console.log(name.value);
    if(name.value.trim() == ""){
        nameerror.innerHTML = "username cannot be blank";
        return false;
    }else if(name.value.length < 5){
        nameerror.innerHTML = "username must not be lessthan 5 character.";
        return false;

    }else{
           nameerror.innerHTML = "";
           return true;
    }
}
function validation(){
    
    let tick= document.getElementById("confirm");
    if(!validationName()  ){
        console.log("not scucess");
       tick.innerHTML="username is incorrect";
        return false;

    }else if ( !validationpassword()){
        console.log("not scucess");
        tick.innerHTML="password is incorrect";
        return false;

    }else {

        return true;
    }
}