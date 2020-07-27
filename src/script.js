const generatePinBtn = document.querySelector('.generate-btn');
const showPin = document.getElementById('pin-show');
generatePinBtn.addEventListener('click', function () {
	let min = 1000;
	let max = 9999;
	showPin.value = Math.floor(Math.random() * (max - min + 1)) + min;
	green.forEach((signal) => {
		signal.classList.remove('green-signal', 'red-signal');
	});
});

const btnNumber = document.querySelectorAll('.btn-number');
const calcScreen = document.querySelector('#calc-screen');

btnNumber.forEach((button) => {
	button.addEventListener('click', function () {
		calcScreen.value += parseInt(button.innerHTML);
		green.forEach((signal) => {
			signal.classList.remove('green-signal', 'red-signal');
		});
	});
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function () {
	calcScreen.value = '';
	green.forEach((signal) => {
		signal.classList.remove('green-signal', 'red-signal');
	});
});

const correct = document.querySelector('.correct');
const wrong = document.querySelector('.not-match');
const submitBtn = document.querySelector('.submit-btn');

let count = 2;
submitBtn.addEventListener('click', function () {
	if (calcScreen.value === showPin.value) {
		correct.style.display = 'block';
		wrong.style.display = 'none';
		green.forEach((signal) => {
			signal.classList.add('green-signal');
		});
		value.innerText = value.innerText;
	}
	if (calcScreen.value !== showPin.value) {
		wrong.style.display = 'block';
		correct.style.display = 'none';
		green.forEach((signal) => {
			signal.classList.add('red-signal');
		});
		value.innerText = count--;
		if (value.innerText < 0) {
			text.innerText = 'Try Again';
		}
	}
});

const green = document.querySelectorAll('.form-control');
green.forEach((input) => {
	input.addEventListener('input', function () {
		input.value = input.value;
		alert('You are not allowed to give input manually');
	});
});

const value = document.querySelector('#value');
const text = document.querySelector('#text');

const backDelete = document.querySelector('#delete');
backDelete.addEventListener('click', function (event) {
	calcScreen.value = calcScreen.value.slice(0, calcScreen.value.length - 1);
	green.forEach((signal) => {
		signal.classList.remove('green-signal', 'red-signal');
	});
});
