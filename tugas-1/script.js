const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Mode Terang';
    } else {
        themeToggle.textContent = 'Mode Gelap';
    }
    
    console.log("Tema berhasil diubah!");
});
