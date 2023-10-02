const form = document.forms[0];
const submitBtn = document.querySelector('[name="submit"]');
const firstName = document.querySelectorAll('input')[0];
const lastName = document.querySelectorAll('input')[1];
const email = document.querySelectorAll('input')[2];
const password = document.querySelectorAll('input')[3];
const erroMsg = document.querySelectorAll('.error-text');


information()
function information() {

	form.addEventListener('submit', function(e) {

		let fName = firstName.value.trim(),
		lName = lastName.value.trim(),
		emailA = email.value.trim(),
		pass = password.value.trim();

		if(fName === '') {
			e.preventDefault();
			firstName.className += "error";
			erroMsg[0].classList.add("visible");
		} else {
			firstName.classList.remove('error');
			erroMsg[0].classList.remove('visible');
		}

		if(lName === '') {
			e.preventDefault();
			lastName.classList.add('error');
			erroMsg[1].classList.add('visible');
		} else {
			lastName.classList.remove('error');
			erroMsg[1].classList.remove('visible');
		}

		if(emailA === '' || emailA.includes('.') === false || emailA.includes('@') === false) {
			e.preventDefault();
			email.classList.add('error');
			erroMsg[2].classList.add('visible');
		} else {
			email.classList.remove('error');
			erroMsg[2].classList.remove('visible');
		}

		if(pass === '') {
			e.preventDefault();
			password.classList.add('error');
			erroMsg[3].classList.add('visible');
		} else {
			password.classList.remove('error');
			erroMsg[3].classList.remove('visible');
		}

	})
	
}
