const account ={
    email: "admin@gmail.com",
    password: "Admin123!"
};

let loginAttempts = 0;
const maxAttempts = 3;

const logininput = document.querySelector('.login-input');
const passwordinput = document.querySelector('.password-input');
const btnlogin = document.querySelector('.btn-login');
const btncancel = document.querySelector('.btn-cancel');
const msg = document.querySelector('.msg');
const mssg = document.querySelector('.msg1');
const count = document.querySelector('.count');

btnlogin.addEventListener("click",  function(e){
    e.preventDefault();

    if(logininput.value.trim() === '' || passwordinput.value.trim()===''){
        msg.innerHTML = "<h2 class='error'> Please fill in all fields </h2>";
        msg.style.color = 'red';
        setTimeout(() => msg.innerHTML='', 3000);
        return;
    }

    if(logininput.value === account.email && passwordinput.value === account.password){
        alert('Login successful!');
        window.location.href = "dashboard.html";
        
    } else{
        loginAttempts++;
         msg.innerHTML = `<h3 class='error'> Incorrect Email or Password attempt to log in : ${maxAttempts - loginAttempts} </h3>`;

        setTimeout(() => msg.innerHTML = '', 3000);

            if(loginAttempts == maxAttempts){
                alert('Maximum login attempts reached. Please try again later.');
                btnlogin.disabled = true;
                btncancel.disabled = true;
                logininput.disabled = true;
                passwordinput.disabled = true;

                let countdownTime = 5;
                count.innerHTML = `You can try again in ${countdownTime} seconds`;

                const countdownInterval = setInterval(() => {
                    countdownTime--;
                    count.innerHTML = `You can try again in ${countdownTime} seconds`;

                    if(countdownTime <= 0){
                        clearInterval(countdownInterval);
                        location.reload();
                    }
                }, 1000);

            }
        }
    
});

btncancel.addEventListener("click", function(e){
    e.preventDefault();
    alert('Cancel successful!');
    window.location.href = "landingpage.html";
});