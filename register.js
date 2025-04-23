const createaccount ={
    '.firstname-input': '',
    '.middlename-input': '',
    '.lastname-input': '',
    '.age-input': '',
    '.email-input': '',
    '.password-input': '',
    '.confirmpass-input': ''
}

const firstname = document.querySelector('.firstname-input');
const middlename = document.querySelector('.middlename-input');
const lastname = document.querySelector('.lastname-input');
const age = document.querySelector('.age-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const confirmpass = document.querySelector('.confirmpass-input');
const btnregister = document.querySelector('.btn-register');
const btncancel = document.querySelector('.btn-cancel');
const msg = document.querySelector('.msg');

btnregister.addEventListener('click', function(e){
    e.preventDefault();

        // Check if all fields are filled
        for ( let select in createaccount){
            const input = document.querySelector(select);
            if(input.value === ''){
                alert('Please fill in all fields');
                setTimeout(() => msg.innerHTML='', 3000);
                return;
            }
        }
     //Check if email is valid
    if(!/\@/.test(email.value)){
        alert('Please enter a valid email address');
        setTimeout(() => msg.innerHTML='', 3000);
        return;
    }

    if(password.value !== confirmpass.value){
        alert('Passwords do not match ');
        setTimeout(() => msg.innerHTML='', 3000);
        return;



    }
     // Check if password is strong
     if(password.value.length < 12){
        alert('Password must be at least 12 characters long');
        setTimeout(() => msg.innerHTML='', 3000);
        return;
   }

   if(!/[A-Z]/.test(password.value)){
        alert('Password must contain at least one uppercase letter');
        setTimeout(() => msg.innerHTML='', 3000);
        return;
   }

   if(!/[a-z]/.test(password.value)){
    alert('Password must contain at least one lowercase letter');
    setTimeout(() => msg.innerHTML='', 3000);
    return;
}

   if(!/[!@#$%^&*()\-_=+{}[\]:;'<>?,.]/.test(password.value)){
    alert('Password must contain at least one special character');
    setTimeout(() => msg.innerHTML='', 3000);
    return;
}


   

    if(age.value < 5){
        alert('You must be at least 5 years old to register');
        setTimeout(() => msg.innerHTML='', 3000);
        return;
    }

    if(age.value < 18){
        alert('You must be at least 18 years old to register');
        setTimeout(() => msg.innerHTML='', 3000);
        return;
    }
    if(age.value >70){
        alert('You must be at least 70 years old to register');
        setTimeout(() => msg.innerHTML='', 3000);
        return;
    }



   else{
        alert('Registration successful!');
        window.location.href = "login.html";
    }


});