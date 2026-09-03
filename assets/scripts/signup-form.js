const signupForm = document.getElementById('signup-form');
const signupStatus = document.getElementById('signup-status');

const playerName = document.getElementById('player-name');
const playerNameError = document.getElementById('player-name-error');

const playerEmail = document.getElementById('player-email');
const playerEmailError = document.getElementById('player-email-error');

const battletag = document.getElementById('battletag');
const battletagError = document.getElementById('battletag-error');

const playerMessage = document.getElementById('player-message');
const playerMessageError = document.getElementById('player-message-error');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    if (playerName.value.trim() === '') {
        playerNameError.textContent = 'Please enter your name.';
        isValid = false;
    } else {
        playerNameError.textContent = '';
    }

    if (playerEmail.value.trim() === '') {
        playerEmailError.textContent = 'Please enter your email.';
        isValid = false;
    } else if (!playerEmail.value.includes('@')) {
        playerEmailError.textContent = 'Please enter a valid email adress.';
        isValid = false;
    } else {
        playerEmailError.textContent = '';
    }

    if (battletag.value.trim() === '') {
        battletagError.textContent = 'Please enter your battletag.';
        isValid = false;
    } else {
        battletagError.textContent = '';
    }

    if (playerMessage.value.trim() === '') {
        playerMessageError.textContent = 'Please enter a message.';
        isValid = false;
    } else {
        playerMessageError.textContent = '';
    }

    if (isValid) {
        signupStatus.textContent = 'Thanks! Your message has been sent.';
        signupForm.reset();
    } else {
        signupStatus.textContent = 'Please fix the errors above and try again.';
    }
});

// clear each field's error message when the user corrects it
playerName.addEventListener('input', function () {
    if (playerName.value.trim() !== '') {
        playerNameError.textContent = '';
    }
});

playerEmail.addEventListener('input', function () {
    if (playerEmail.value.trim() !== '' && playerEmail.value.includes('@')) {
        playerEmailError.textContent = '';
    }
});

battletag.addEventListener('input', function () {
    if (battletag.value.trim() !== '') {
        battletagError.textContent = '';
    }
});

playerMessage.addEventListener('input', function () {
    if (playerMessage.value.trim() !== '') {
        playerMessageError.textContent = '';
    }
});