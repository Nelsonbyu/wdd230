const Button = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

Button.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('open');
});