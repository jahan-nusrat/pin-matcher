/* Variable assign */
const generatePinBtn = document.querySelector('.generate-btn');
const showPin = document.getElementById('pin-show');
const btnNumber = document.querySelectorAll('.button');
const calcScreen = document.querySelector('#calc-screen');
const correct = document.querySelector('.match');
const wrong = document.querySelector('.not-match');
const submitBtn = document.querySelector('.submit-btn');
const inputField = document.querySelectorAll('.form-control');
const value = document.querySelector('#value');
const text = document.querySelector('#text');

/* Generate PIN Number and show it in input field */
generatePinBtn.addEventListener('click', function () {
	let min = 1000;
	let max = 9999;
	showPin.value = Math.floor(Math.random() * (max - min + 1)) + min; //random number generate
	removeSignal()
	display()
});

/* Show the button number to calculator screen */
btnNumber.forEach((button) => {
	button.addEventListener('click', function (event) {
		if (!event.target.classList.contains('delete', 'clear')) { //check if target is not clear and backspace button
			calcScreen.value += parseInt(button.innerHTML);
			display()
			removeSignal()
		}
	});
});

/* Clear button (clear all given input) */
document.querySelector('.clear').addEventListener('click', function () {
	calcScreen.value = '';
	removeSignal()
});

/* Submit Button functionality */
let count = 3;
submitBtn.addEventListener('click', function () {
	if (showPin.value === '') { //check if pin input value is empty!
		alert('Please Generate a PIN Number!!')
		text.innerText = text.innerText

	} else if (calcScreen.value === showPin.value) { //check if pin value and calculator input value is equal
		correct.style.display = 'block';
		wrong.style.display = 'none';
		inputField.forEach((signal) => {
			signal.classList.add('green-signal');
		});
		text.innerHTML = '<b>SUCCESS</b>';

	} else { //if pin value and calc value is not equal
		wrong.style.display = 'block';
		correct.style.display = 'none';
		inputField.forEach((signal) => {
			signal.classList.add('red-signal');
		});
		count--
		text.innerHTML = `${count} try left`
		if (count === 0) { //disable submit button after 3 try
			submitBtn.style.display = 'none';
		}
	}
});

/* Disabling the input focus written */
inputField.forEach((input) => {
	input.addEventListener('input', function () {
		input.value = '';
		alert('You are not allowed to give input manually');
	});
});

/* Backspace button */
document.querySelector('.delete').addEventListener('click', function () {
	calcScreen.value = calcScreen.value.slice(0, calcScreen.value.length - 1);
	wrong.style.display = 'none';
	correct.style.display = 'none';
	removeSignal()
});


function removeSignal() {
	inputField.forEach((signal) => {
		signal.classList.remove('green-signal', 'red-signal');
	});
}

function display() {
	wrong.style.display = 'none';
	correct.style.display = 'none';
	text.innerHTML = ` ${count} try left`
}