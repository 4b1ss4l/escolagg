document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'skibidi') {
        window.location.href = 'https://drive.google.com';
    } else {
        alert('Erro: Senha incorreta.');
    }
});

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('loginForm').submit();
    }
});