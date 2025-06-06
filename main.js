const fireBtn = document.getElementById('fire-btn');
const nameInput = document.getElementById('name-input');
const nameSpan = document.getElementById('name');
const inputOverlay = document.getElementById('input-overlay');
const message = document.getElementById('message');
const doneBtn = document.getElementById('done-btn');
const container = document.querySelector('.container');

doneBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || '권재은';
    nameSpan.textContent = name;
    inputOverlay.style.display = 'none';
    message.style.display = '';
    fireBtn.style.display = '';
});

fireBtn.addEventListener('click', () => {
    for (let i = 0; i < 7; i++) {
        const fire = document.createElement('span');
        fire.className = 'fire-emoji';
        fire.textContent = '🔥';
        fire.style.position = 'absolute';
        fire.style.left = (180 + Math.random() * 40) + 'px';
        fire.style.top = (170 + Math.random() * 30) + 'px';
        container.appendChild(fire);
        setTimeout(() => fire.remove(), 700);
    }
});

nameInput.addEventListener('input', function() {
    nameSpan.textContent = nameInput.value || '권재은';
});