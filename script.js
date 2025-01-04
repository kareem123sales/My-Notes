document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // هنا يتم تنفيذ عمليات تسجيل الدخول
        const username = event.target.username.value;
        const password = event.target.password.value;
        alert(`Login With ${username}`);
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // هنا يتم تنفيذ عمليات إنشاء الحساب
        const newUsername = event.target['new-username'].value;
        const newPassword = event.target['new-password'].value;
        alert(`Make a New Account With ${newUsername}`);
    });
});
