window.onload = function() {
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem('username');
    
    if (username) {
        usernameDisplay.textContent = username, $(username);
    } else {
        window.location.href = 'Вход.html';
    }
};