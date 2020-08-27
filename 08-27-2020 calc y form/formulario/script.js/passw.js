const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usuarioValue === '') {
		swal ( "¡ No puedes dejar este ususraio en blanco! " );
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		swal ( "¡ No puede dejar el email en blanco! " );
	} else if (!isEmail(emailValue)) {
		swal ( "¡ No ingreso un email válido! " );		
	} else {
		setSuccessFor(email);
	}
    
    if(passwordValue === '') {		
		swal ( "¡ No puedes dejar el password en blanco! " );
	} else if (!isPassword(passwordValue)) {
		swal ( "¡ password Invalido! " );
	} else {
		setSuccessFor(password);
	}

	
	if(password2Value === '') {
		swal ( "¡ No puedes dejar el password2 en blanco! " );
	} else if(passwordValue !== password2Value) {
		swal ( "¡Passwords no coinciden! " );
		} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isPassword(password) {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


