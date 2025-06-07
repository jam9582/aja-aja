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
    // "파이팅" span의 위치와 크기 기준으로 불 이모지 생성
    const fighting = document.getElementById('fighting');
    const fightingRect = fighting.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // fighting span의 영역 내에서 랜덤하게 불 이모지 생성
    for (let i = 0; i < 7; i++) {
        const fire = document.createElement('span');
        fire.className = 'fire-emoji';
        fire.textContent = '🔥';
        fire.style.position = 'absolute';
        fire.style.left = (fightingRect.left - containerRect.left + Math.random() * fightingRect.width) + 'px';
        fire.style.top = (fightingRect.top - containerRect.top + Math.random() * fightingRect.height - 10) + 'px';
        container.appendChild(fire);
        setTimeout(() => fire.remove(), 700);
    }
});

nameInput.addEventListener('input', function() {
    nameSpan.textContent = nameInput.value || '권재은';
});