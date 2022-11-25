var firstname = document.forms['signupForm']['firstname'];
var lastname = document.forms['signupForm']['lastname'];
var email = document.forms['signupForm']['email'];
var password = document.forms['signupForm']['password'];

var signup_error = document.querySelector('.signup_error');


var lemail = document.forms['loginForm']['lemail'];
var lpassword = document.forms['loginForm']['lpassword'];

var login_error = document.querySelector('.login_error');

firstname.addEventListener('textInput', fstnameVerify);
lastname.addEventListener('textInput', lstnameVerify);
email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passwordVerify);

lemail.addEventListener('textInput', lemailVerify);
lpassword.addEventListener('textInput', lpasswordVerify);

function signupValid(){
	if (firstname.value.length <= 2) {
		signup_error.style.display = "block";
		firstname.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Firstname";
		firstname.focus();
		return false;
	}
	if (lastname.value.length <= 2) {
		signup_error.style.display = "block";
		lastname.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Lastname";
		lastname.focus();
		return false;
	}
	if (email.value.length <= 8) {
		signup_error.style.display = "block";
		email.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Email or Phone";
		email.focus();
		return false;
	}
	if (password.value.length <= 3) {
		signup_error.style.display = "block";
		password.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Password";
		password.focus();
		return false;
	}
}
function fstnameVerify(){
	if (firstname.value.length > 1) {
		signup_error.style.display = "none";
		firstname.style.border = "1px solid #3498db";
		signup_error.innerText = "Invild First Name";
		return true;
	}
}
function lstnameVerify(){
	if (lastname.value.length > 1) {
		signup_error.style.display = "none";
		lastname.style.border = "1px solid #3498db";
		signup_error.innerText = "Invild Last Name";
		return true;
	}
}
function emailVerify(){
	if (email.value.length > 7) {
		signup_error.style.display = "none";
		email.style.border = "1px solid #3498db";
		signup_error.innerText = "Invild Email";
		return true;
	}
}
function passwordVerify(){
	if (password.value.length > 2) {
		signup_error.style.display = "none";
		password.style.border = "1px solid #3498db";
		login_error.innerText = "Invild Password";
		return true;
	}
}

function loginValid(){
	if (lemail.value.length <= 8) {
		login_error.style.display = "block";
		email.style.border = "1px solid red";
		login_error.innerText = "Please Fill up Your Email or Phone";
		email.focus();
		return false;
	}
	if (lpassword.value.length <= 3) {
		login_error.style.display = "block";
		password.style.border = "1px solid red";
		login_error.innerText = "Please Fill up Your Password";
		lpassword.focus();
		return false;a
	}
}
function lemailVerify(){
	if (lemail.value.length > 7) {
		login_error.style.display = "none";
		email.style.border = "1px solid #3498db";
		login_error.innerText = "Invild Email";
		return true;
	}
}
function lpasswordVerify(){
	if (lpassword.value.length > 2) {
		login_error.style.display = "none";
		password.style.border = "1px solid #3498db";
		login_error.innerText = "Invild Password";
		return true;
	}
}

