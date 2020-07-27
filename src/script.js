/* Variable assign */
const generateBtn = document.querySelector('.generate-btn');
const displayPin = document.getElementById('pin-display');
const btnNumber = document.querySelectorAll('.button');
const calcDisplay = document.querySelector('#calc-display');
const submitBtn = document.querySelector('.submit-btn');
const countTry = document.querySelector('#try-count');
const inputField = document.querySelectorAll('.form-control');

/* HIDE NOTIFY MESSAGE */
display('none', 'none');

/* PIN GENERATE AND DISPLAY IN INPUT FIELD */
generateBtn.addEventListener('click', function () {
	let min = 1000;
	let max = 9999;
	displayPin.value = Math.floor(Math.random() * (max - min + 1)) + min; //random number generate
	submitBtn.removeAttribute('disabled');
	clearInfo();
});

/* USER INPUT AND SHOW IN CALC SCREEN */
btnNumber.forEach((button) => {
	button.addEventListener('click', function (event) {
		if (!event.target.classList.contains('delete', 'clear')) { //if target is not Backspace and Clear button
			calcDisplay.value += parseInt(button.innerHTML);
			countTry.innerHTML = ` ${count} try left`;
			removeSignal();
			display('none', 'none');
		}
	});
});

/* SUBMIT BUTTON AND VALIDATION */
let count = 3;
submitBtn.addEventListener('click', function () {
	if (displayPin.value === '') {				//check if pin input value is empty!
		alert('Please Generate a PIN Number!!');
		countTry.innerText = countTry.innerText;
	} 
	else if (calcDisplay.value === displayPin.value) {	//check if pin value and calculator input value is equal
		display('none', 'block'); //notify matched message
		inputField.forEach((signal) => {
			signal.classList.add('green-signal');
		});
		countTry.innerHTML = '<b>SUCCESS</b>';
	} else {						//if pin value and calc value is not equal
		display('block', 'none'); //notify not matched message
		inputField.forEach((signal) => {
			signal.classList.add('red-signal');
		});
		count -= 1;
		countTry.innerHTML = `${count} try left`;
		if (count === 0) {	//disable submit button after 3 try
			submitBtn.setAttribute('disabled', true);
		}
	}
});

/* DELETE BUTTON */
document.querySelector('.delete').addEventListener('click', function () {
	calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length - 1);
	display('none', 'none');
	removeSignal();
});

/* ALL CLEAR BUTTON */
document.querySelector('.clear').addEventListener('click', function () {
	calcDisplay.value = '';
	removeSignal();
	display('none', 'none');
});

/* ALERT IF USER MANUALLY WRITE PIN */
document.querySelector('.form-control').addEventListener('input', function () {
	displayPin.value = '';
	alert('You are not allowed to give input manually');
	clearInfo();
});

/* ----------FUNCTIONS------------ */

/* input field red green signal function */
function removeSignal() {
	inputField.forEach((signal) => {
		signal.classList.remove('green-signal', 'red-signal');
	});
}

/* notify function */
function display(firstDisplay, secondDisplay) {
	document.querySelector('.not-match').style.display = firstDisplay;
	document.querySelector('.match').style.display = secondDisplay;
}

function clearInfo() {
	display('none', 'none');
	calcDisplay.value = '';
	removeSignal();
	count = 3;
	countTry.innerHTML = ` ${count} try left`;
}
