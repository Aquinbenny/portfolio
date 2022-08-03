var ErrorName=document.getElementById('ErrorName');
var ErrorEmail=document.getElementById('ErrorEmail');
var ErrorSubject=document.getElementById('ErrorSubject');
var ErrorMessage=document.getElementById('ErrorMessage');
var ErrorSubmit=document.getElementById('ErrorSubmit');

function validatename(){
    
    var vname=document.getElementById('name').value;
    
    if(vname.length == 0){
        ErrorName.innerHTML='Name is required';
        return false;
    }    
    // if(!vname.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
        // ErrorName.innerHTML='Write full Name';
        // return false;
    // }
    ErrorName.innerHTML='valid';
    return true;
}
function validateEmail(){
    
    var vemail=document.getElementById('email').value;
    
    if(vemail.length == 0){
        ErrorEmail.innerHTML='Email required';
        
    }    
    if(!vemail.match(/^([\-\.0-9a-zA-Z]+)@([\-\..0-9a-zA-Z]+)\.([a-z]){2,7}$/)){
        ErrorEmail.innerHTML='Email Invalid';
        return false;
    }
    ErrorEmail.innerHTML='valid';
    return true;
}
function validatesubject(){
    
    var vsubject=document.getElementById('subject').value;
    
    if(vsubject.length == 0){
        ErrorSubject.innerHTML='Subject required';
        return false;
    }    
    ErrorSubject.innerHTML='valid';
    return true;
}
function validatemessage(){
    
    var vmessage=document.getElementById('message').value;
    var required=30;
    var left=required-vmessage.length;

    if(left>0){
        ErrorMessage.innerHTML=left+'More Charecters required';
        return false;
    }    
    ErrorMessage.innerHTML='valid';
    return true;
}
function validateForm(){

    if(!validatename() || !validateEmail() || !validatemessage() || !validatesubject()){
        ErrorSubmit.style.display='block';
        ErrorSubmit.innerHTML='Please fix error';
        setTimeout(function(){ErrorSubmit.style.display='none';},3000);
        return false;
    }
}