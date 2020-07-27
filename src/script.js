/* Variable assign */
const generateBtn = document.querySelector('.generate-btn');
const displayPin = document.getElementById('pin-display');
const btnNumber = document.querySelectorAll('.button');
const calcDisplay = document.querySelector('#calc-display');
const matched = document.querySelector('.match');
const notMatched = document.querySelector('.not-match');
const submitBtn = document.querySelector('.submit-btn');
const inputField = document.querySelectorAll('.form-control');
const countTry = document.querySelector('#try-count');

/* Generate PIN Number and show it in input field */
generateBtn.addEventListener('click', function () {
	let min = 1000;
	let max = 9999;
	displayPin.value = Math.floor(Math.random() * (max - min + 1)) + min; //random number generate
	removeSignal();
	countTry.innerHTML = ` ${count} try left`;
	display('none', 'none');
});

/* Show the button number to calculator screen */
btnNumber.forEach((button) => {
	button.addEventListener('click', function (event) {
		if (!event.target.classList.contains('delete', 'clear')) {
			//if target is not Backspace and Clear button
			calcDisplay.value += parseInt(button.innerHTML);
			countTry.innerHTML = ` ${count} try left`;
			removeSignal();
		}
	});
});

/* Submit Button functionality */
let count = 3;
submitBtn.addEventListener('click', function () {
	if (displayPin.value === '') {
		//check if pin input value is empty!
		alert('Please Generate a PIN Number!!');
		countTry.innerText = countTry.innerText;
	} else if (calcDisplay.value === displayPin.value) {
		//check if pin value and calculator input value is equal
		display('none', 'block');
		inputField.forEach((signal) => {
			signal.classList.add('green-signal');
		});
		countTry.innerHTML = '<b>SUCCESS</b>';
	} else {
		//if pin value and calc value is not equal
		display('block', 'none');
		inputField.forEach((signal) => {
			signal.classList.add('red-signal');
		});
		count--;
		countTry.innerHTML = `${count} try left`;
		if (count === 0) {
			//disable submit button after 3 try
			submitBtn.style.display = 'none';
		}
	}
});

/* Backspace button */
document.querySelector('.delete').addEventListener('click', function () {
	calcDisplay.value = calcDisplay.value.slice(0, calcDisplay.value.length - 1);
	display('none', 'none');
	removeSignal();
});

/* Clear button (clear all given input) */
document.querySelector('.clear').addEventListener('click', function () {
	calcDisplay.value = '';
	removeSignal();
	display('none', 'none');
});

/* Disabling the input focus written */
inputField.forEach((input) => {
	input.addEventListener('input', function () {
		input.value = '';
		alert('You are not allowed to give input manually');
	});
});

//FUNCTIONS
/* input field red green signal functionality */
function removeSignal() {
	inputField.forEach((signal) => {
		signal.classList.remove('green-signal', 'red-signal');
	});
}

/* match,not-match function */
function display(firstDisplay, secondDisplay) {
	notMatched.style.display = firstDisplay;
	matched.style.display = secondDisplay;
}