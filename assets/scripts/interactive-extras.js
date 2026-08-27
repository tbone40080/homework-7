// feature 1: button would change page content
const tipButton = document.getElementById('tip-button');
const tipText = document.getElementById('tip-text');

const tips = [
    "Zenyatta's Discord Orb can increase the damage taken by enemies.",
    "Reinhardt's shield regenerates faster when not being hit.",
    "Talking with your team matters more than mechanical skill.",
    "Switching heroes mid-match is often better than using a bad matchup.",
    "Ultimates are better used when used together with your team rather than alone.",
];

let tipIndex = 0;

tipButton.addEventListener('click', function () {
    tipText.textContent = tips[tipIndex];
    tipIndex = tipIndex + 1;
    if (tipIndex >= tips.length) {
        tipIndex = 0;
    }
});

// feature 2: the style changes as the user types
const colorInput = document.getElementById('color-input');
const colorPreview = document.getElementById('color-preview');

colorInput.addEventListener('input', function () {
    colorPreview.style.backgroundColor = colorInput.value;
});

// feature 3: dynamic list with createElement/appendChild and a delete button
const momentInput = document.getElementById('moment-input');
const addMomentButton = document.getElementById('add-moment-button');
const momentList = document.getElementById('moment-list');

addMomentButton.addEventListener('click', function () {
    const momentText = momentInput.value.trim();

    if (momentText === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = momentText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        momentList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    momentList.appendChild(listItem);

    momentInput.value = '';
});