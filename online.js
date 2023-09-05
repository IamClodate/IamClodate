
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;
    
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Please write Full Name';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});


// function validateForm() {
//     var isNameValid = validateName();
//     var isEmailValid = validateEmail();
//     var isMessageValid = validateMessage();
    
//     if (!isNameValid || !isEmailValid || !isMessageValid) {
//         submitError.style.display = 'block';
//         submitError.innerHTML = 'Please fix errors to submit';
//         setTimeout(function () {
//             submitError.style.display = 'none';
//         }, 3000);
//         return false;
//     }
//     return true;
// }

// toggle icon navbar
Let menuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* scroll sections active Links */

Let sections = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });

// sticky navbar
Let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon  andnavbar when click navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay:200 
});
ScrollReveal().reveal('home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('hme-img, .skills-container, .portfolio-row, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('home-content h3, .about-img', { origin: 'left'});
ScrollReveal().reveal('home-content p, .about-content', { origin: 'right'});



