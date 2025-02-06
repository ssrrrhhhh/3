const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('usernameInput');
    
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        
        if (username.trim() !== '') {
            localStorage.setItem('username', username);
            window.location.href = 'лк.html';
        } else {
            alert('Please enter a username.');
        }
    });