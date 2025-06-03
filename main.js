const fireBtn = document.getElementById('fire-btn');
const fighting = document.getElementById('fighting');
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
    // 메시지 왼쪽으로 이동
    message.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
    message.style.transform = 'translateX(-120px)';

    // 1초 후 원래 위치로 복귀
    setTimeout(() => {
        message.style.transform = 'translateX(0)';
    }, 1000);

    // 불 이모지 효과를 message 오른쪽에 생성 (container 기준)
    const msgRect = message.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    const baseLeft = msgRect.right - contRect.left + 10; // message 오른쪽 기준
    const baseTop = msgRect.top - contRect.top + msgRect.height / 2 - 15; // message 수직 중앙

    for (let i = 0; i < 7; i++) {
        const fire = document.createElement('span');
        fire.className = 'fire-emoji';
        fire.textContent = '🔥';
        fire.style.left = (baseLeft + Math.random() * 30) + 'px';
        fire.style.top = (baseTop + (Math.random() - 0.5) * 30) + 'px';
        container.appendChild(fire);

        setTimeout(() => fire.remove(), 700);
    }
});

nameInput.addEventListener('input', function() {
    nameSpan.textContent = nameInput.value || '권재은';
});