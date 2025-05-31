const fireBtn = document.getElementById('fire-btn');
const fighting = document.getElementById('fighting');
const nameInput = document.getElementById('name-input');
const nameSpan = document.getElementById('name');
const inputOverlay = document.getElementById('input-overlay');
const message = document.getElementById('message');
const doneBtn = document.getElementById('done-btn');

doneBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || '권재은';
    nameSpan.textContent = name;
    inputOverlay.style.display = 'none';
    message.style.display = '';
    fireBtn.style.display = '';
});

fireBtn.addEventListener('click', () => {
    // 파이팅 글자 주위에 불 이모티콘 여러 개 생성
    for (let i = 0; i < 5; i++) {
        const fire = document.createElement('span');
        fire.className = 'fire-emoji';
        fire.textContent = '🔥';
        fire.style.position = 'relative';
        // 랜덤 위치(파이팅 글자 주위)
        fire.style.left = `${Math.random() * 60 - 20}px`;
        fire.style.top = `${Math.random() * 30 - 15}px`;
        fighting.appendChild(fire);

        // 애니메이션 끝나면 삭제
        setTimeout(() => fire.remove(), 700);
    }
});

nameInput.addEventListener('input', function() {
    nameSpan.textContent = nameInput.value || '권재은';
});