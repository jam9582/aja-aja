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

    // 불 이모지 효과를 message 오른쪽에 생성
    const rect = message.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    for (let i = 0; i < 7; i++) {
        const fire = document.createElement('span');
        fire.className = 'fire-emoji';
        fire.textContent = '🔥';
        fire.style.position = 'absolute';
        fire.style.left = (rect.right - containerRect.left + 20 + Math.random() * 40) + 'px';
        fire.style.top = (rect.top - containerRect.top - 10 + Math.random() * 20) + 'px';
        fire.style.fontSize = '2rem';
        fire.style.pointerEvents = 'none';
        fire.style.zIndex = 100;
        fire.style.opacity = 1;
        container.appendChild(fire);

        // 불 이모지 애니메이션(위로 올라가며 사라짐)
        setTimeout(() => {
            fire.style.transition = 'all 0.7s';
            fire.style.transform = 'translateY(-40px) scale(1.3)';
            fire.style.opacity = 0;
        }, 10);

        setTimeout(() => fire.remove(), 800);
    }
});

nameInput.addEventListener('input', function() {
    nameSpan.textContent = nameInput.value || '권재은';
});