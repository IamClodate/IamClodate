var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-erro');
var submitError =document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;
    
    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}{A-Za-z}*&/)){
        nameError.innerHTML = 'Please write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-Z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// function validateForm(){

//     if(!validateName() || !validateEmail() || !validateMessage()){
//         submitError.style.display = 'block';
//         submitError.innerHTML = 'Please fix error to submit';
//         setTimeout(function(){submitError.style.display = 'none';}, 3000);
//         return false;
//     }
// }

function validateForm() {
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isMessageValid = validateMessage();
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    return true;
}
