let selectForm = document.getElementById("all-sections");
let user = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone");
let check = document.getElementById("confirm-pwd");
let errorIcon = document.getElementsByClassName("errorIcon")
let rightCheck = document.getElementsByClassName("rightCheck")
let icons = document.getElementsByClassName('icons')
let btn = document.querySelector('#btn');

let userError = document.querySelector('.userError')
let emailError = document.querySelector('.emailError')
let phoneError = document.querySelector('.phoneError')
let passwordError = document.querySelector('.passwordError')
let pwdCheckError = document.querySelector('.pwdCheckError')

let input = document.querySelectorAll('input');



function disableBtnInitially(e){
    btn.disabled = e
}
function errormsg(fieldName,text){
    fieldName.classList.add('show')
    fieldName.classList.remove('errorHide')
    fieldName.textContent=`${text}`;

    fieldName.parentElement.lastElementChild.firstElementChild.style.visibility='visible'
    fieldName.parentElement.lastElementChild.lastElementChild.style.visibility='hidden'
    
}
function errorMsgHide(field){
    field.classList.add('errorHide')
    field.classList.remove('show')

    field.parentElement.lastElementChild.firstElementChild.style.visibility='hidden'
    field.parentElement.lastElementChild.lastElementChild.style.visibility='visible'
}

for(input of input){
input.addEventListener('keyup',(e)=>{
    e.preventDefault()


    // username validation 
    if(user.value === ""){
        errormsg(userError,'username should not be empty',"error");
    }else if((user.value).match(/\s/g)){
        errormsg(userError,'Space is not allowed');
    }else if((user.value).match(/\W/g)){
        errormsg(userError,'Dont use special Characters');   
    }else if((user.value).match(/\d/g)){
        errormsg(userError,'Dont use digits Characters');  
    }else if(!(user.value).match(/[A-Z][A-Za-z]/g)){
        errormsg(userError,'First Character Should be Capital');  
    }else{
        errorMsgHide(userError)
    }

    // email validation 
    if(email.value === ""){
        errormsg(emailError,'Email should not be empty');
    }else if((email.value).indexOf(' ')!==-1){
        errormsg(emailError,'Space is not Allowed in email')
    }else if(!(email.value).match(/[@]/g)){
        errormsg(emailError,'@ is missing')
    }else if((email.value).match(/[@]{2,}/g)){
        errormsg(emailError,'More than 1 @ are not allowed')
    }else if(!(email.value).match(/[a-z 0-9 \. \_ \-]+[@][a-z]+\.[a-z]{2,3}/)){
        errormsg(emailError,'format should be "example@gmail.com"')
    }else{
        errorMsgHide(emailError)
    }

    //phone number validations
    let phNum=phone.value
    if(phNum===''){
        errormsg(phoneError,'Phone number should not be blank')
    }else if(!phNum.match(/[0-9]/)){
        errormsg(phoneError,'only digits are allowed')
    }else if(!phNum.match(/[9][2][3][0-9]{9}/)){
        errormsg(phoneError,'923XXXXXXXXX')
    }else{
        errorMsgHide(phoneError)
    }

    //password validations
    let passwordValue = password.value;
    if(passwordValue===""){
        errormsg(passwordError,'Password should not be empty.')
    }else if(!passwordValue.match(/[A-Z]/)){
        errormsg(passwordError,'Must contain Capital letter')
    }else if(!passwordValue.match(/[a-z]/)){
        errormsg(passwordError,'Must contain small letter')
    }else if(!passwordValue.match(/[0-9]/)){
        errormsg(passwordError,'Must contain a digit from 0-9')
    }else if(!passwordValue.match(/[\W]/)){
        errormsg(passwordError,'A special character is required (@#$%^&)')
    }else if(passwordValue.length < 8){
        errormsg(passwordError,'Password should must be 8 characters.')
    }else{
        errorMsgHide(passwordError)
    }

 let pwd = passwordValue;
 let finalpwd = check.value
 
 // confirm password validations
 if(check.value === ''){
     errormsg(pwdCheckError, 'Field should not be blank')
    }else if(pwd !== finalpwd){
        errormsg(pwdCheckError, 'Password not matched')
    }else{
        errorMsgHide(pwdCheckError)
    }
let detectError = document.getElementsByClassName('detectError')

function myKeys(e){
   return detectError[e].classList.contains('show')
}
if(myKeys(0) || myKeys(1) || myKeys(2) || myKeys(3) || myKeys(4)){
    btn.classList.add('disabledBtn')
    btn.disabled=false;
    btn.addEventListener('click',function(e){
        e.preventDefault();
        btn.value='Fields are not properly filled'
        btn.classList.add('animation')
        setInterval(function(){
            btn.classList.remove('animation')
        },3000)
    })
}else{
    let form = document.querySelector('form');
    btn.disabled = false
    btn.value='Submit Form'
    btn.classList.remove('disabledBtn')
    btn.addEventListener('click',function(){form.submit(); btn.value='SubmitForm'})
}
})
}




