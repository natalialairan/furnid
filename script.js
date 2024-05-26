
//header
window.addEventListener('scroll', function(){
    const headerLogo = document.querySelector(".main-logo");
    const header = document.getElementById("header");
    if(window.pageYOffset > 0){
        headerLogo.style.width="45px";
        headerLogo.style.transitionProperty="width";
        headerLogo.style.transitionDuration="0.5s";
        headerLogo.style.transitionTimingFunction="ease-in-out";
        header.classList.add("hover-color", "hover-font-color");
        header.classList.add("hover-font-color");
    } else {
        headerLogo.style.width="75px";
        header.classList.remove("hover-color", "hover-font-color");
        header.classList.remove("hover-font-color");
    }
})


//validation for form input

function validate(){
    
var email = document.forms["login-form"]["email"];
var password = document.forms["login-form"]["password"];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

    if(email.value.length<9){
        email.style.border="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }

    if(password.value.length<1){
        password.style.border="1px solid red";
        pass_error.style.display="block";
        password.focus();
        return false;
    }
}


// email.addEventListener('text input', email_verify);
// password.addEventListener('text input', pass_verify);

// function email_verify(){

//     var email = document.forms["form"]["email"];

//     if(email.value.length>8){
//         email.style.border="1px solid red";
//         email_error.style.display="none";
//         return true;
//     }
// }

// function pass_verify (){
//     var password = document.forms["form"]["password"];
    
//     if(password.value.length>8){
//         password.style.border="1px solid red";
//         pass_error.style.display="none";
//         return true;
//     }

// }

