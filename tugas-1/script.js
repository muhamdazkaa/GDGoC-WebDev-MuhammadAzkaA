const themeBtn = document.getElementById('theme-toggle');
const regForm = document.getElementById('regForm');
const phoneInput = document.getElementById('phone');
const successMsg = document.getElementById('success-msg');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const phoneValue = phoneInput.value;

    if (!/^\d+$/.test(phoneValue)) {
        alert("Nomor telepon hanya boleh berisi angka!");
        return;
    }

    successMsg.classList.remove('hidden');
    regForm.style.display = 'none'; 

    console.log("Data Terkirim!");
});
