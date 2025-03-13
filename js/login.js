// Login Modal Script
document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('login-btn');
    var loginModal = document.getElementById('login-modal');
    var closeBtn = document.querySelector('.close-btn');

    loginBtn.addEventListener('click', function (event) {
        event.preventDefault();
        loginModal.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    closeBtn.addEventListener('click', function () {
        loginModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});