const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignIn');
const RegisterLink=document.querySelector('.SignUp');
RegisterLink.addEventListener('click',()=>{
    container.classList.add('active');
}
)
LoginLink.addEventListener('click',()=>{
    container.classList.remove('active');
}
)

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.querySelector('#loginForm input[name="email"]').value;
    const password = document.querySelector('#loginForm input[name="password"]').value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = "index.html";
});