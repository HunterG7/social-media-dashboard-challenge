const modeSwitch = document.querySelector('#mode-switch-wrapper');
const modeSwitchCircle = document.querySelector('#mode-switch');

const topBackground = document.querySelector('#top-bg');
const bottomBackground = document.querySelector('#bottom-bg');
const socialMediaCards = document.querySelectorAll('.sm-card, .overview-card');
const primaryText = document.querySelectorAll('.followers-count, .overview-card-row h3, header h1');
const secondaryText = document.querySelectorAll('.sm-handle, .overview-category, header p');
const overviewHeader = document.querySelector('#overview-header');
const footer = document.querySelector('.attribution');

modeSwitch.addEventListener('click', (e)=>{
	modeSwitchCircle.classList.toggle('dark-mode-switch');
	modeSwitch.classList.toggle('dark-mode-switch-wrapper');
	overviewHeader.classList.toggle('dark-overview-header');
	topBackground.classList.toggle( 'dark-top-bg');
	bottomBackground.classList.toggle('dark-bottom-bg');
	socialMediaCards.forEach((card)=>{
		card.classList.toggle('dark-media-cards-bg');
	})
	primaryText.forEach((text)=>{
		text.classList.toggle('dark-primary-text');
	})
	secondaryText.forEach((text)=>{
		text.classList.toggle('dark-secondary-text');
	})

	footer.classList.toggle('dark-attribution');
});