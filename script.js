function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (password === '2601') {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        message.textContent = 'Por favor Domii Bebé, ingresa bien la contraseña. Sugerencia: 4 digitos, Mes';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });
            target.classList.add('active');
        });
    });
    
    setInterval(() => {
        const now = new Date();
        document.getElementById('datetime').textContent = now.toLocaleString();
    }, 1000);
});
