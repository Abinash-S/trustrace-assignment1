const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const age = document.getElementById('age');
const phone1 = document.getElementById('phone1');
const phone2 = document.getElementById('phone2');
const phone3 = document.getElementById('phone3');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');

function checkInputs() {
	checkFirstName();
	checkLastName();
	checkEmail();
	checkAge();
	checkPhone1();
	checkPhone2();
	checkPhone3();
	checkAddress();
	checkZipcode();
	if(!checkLastName() || !checkFirstName() || !checkAge() || !checkEmail() || !checkPhone1() || !checkPhone2() || !checkPhone3() || !checkAddress() || !checkZipcode())
		return false;
	redirect();
	e.preventDefault();
	return true;
}
function checkFirstName(){
	const firstNameValue = firstName.value.trim();
	let namePattern = /([A-Za-z])$/;
	if(firstNameValue === '') {
		setErrorFor(firstName, 'Name cannot be blank');
		return false;
	}
	else if (firstNameValue.match(/\d/) != null) {
        setErrorFor(firstName,"Name cannot have numbers");
        return false;
    }
    else if (!namePattern.test(firstNameValue)) {
        setErrorFor(firstName,"Name cannot have Special Characters");
        return false;
    }
	setSuccessFor(firstName);
	return true;
}

function checkLastName(){
	let namePattern = /([A-Za-z])$/;
	const lastNameValue = lastName.value.trim();
	if(lastNameValue === '') {
		setErrorFor(lastName, 'Name cannot be blank');
		return false;
	}
	else if (lastNameValue.match(/\d/) != null) {
        setErrorFor(lastName,"Name cannot have numbers");
        return false;
    }
    else if (!namePattern.test(lastNameValue)) {
        setErrorFor(lastName,"Name cannot have Special Characters");
        return false;
    }
	setSuccessFor(lastName);
	return true;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkEmail(){
	const emailValue = email.value.trim();
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
	}
	setSuccessFor(email);
	return true;
}

function checkAge() {
	const ageValue = age.value.trim();
    if (ageValue === "") {
        setErrorFor(age,'Age cannot be blank');
        return false;
    }
    else if (ageValue.length != 2) {
        setErrorFor(age,'Age must be 10 to 99');
        return false;
    }
	setSuccessFor(age);
    return true;
}

function checkPhone1(){
	const phone1Value = phone1.value.trim();
	if(phone1Value === '') {
		setErrorFor(phone1, 'Phone No cannot be blank');
		return false;
	}
	setSuccessFor(phone1);
	return true;
}

function checkPhone2(){
	const phone2Value = phone2.value.trim();
	if(phone2Value === '') {
		setErrorFor(phone2, 'Phone No cannot be blank');
		return false;
	}
	setSuccessFor(phone2);
	return true;
}

function checkPhone3(){
	const phone3Value = phone3.value.trim();
	if(phone3Value === '') {
		setErrorFor(phone3, 'Phone No cannot be blank');
		return false;
	}
	setSuccessFor(phone3);
	return true;
}


function checkAddress(){
	const addressValue = address.value.trim();
	if(addressValue === ''){
		setErrorFor(address,'Address cannot be blank');
		return false;
	}
	setSuccessFor(address);
	return true;
}

function checkZipcode(){
	const zipcodeValue = zipcode.value.trim();
	let zipcodePattern =  /([0-9])$/;
	if(zipcodeValue === ''){
		setErrorFor(zipcode,"zipcode cannot be blank");
		return false;
	}
	else if (!zipcodePattern.test(zipcodeValue)) {
        setErrorFor(zipcode,"zipcode cannot have Special Characters or alphabets");
        return false;
    }
	setSuccessFor(zipcode);
	return true;
    
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

function redirect()
{
    var url = "display.html";
    window.location(url);
}