

const loginForm = document.querySelector('#entrar')
loginForm.addEventListener('click', (e) => {



 e.preventDefault()


    const email = document.querySelector('#logemail').value
    const password = document.querySelector('#logpassword').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validadorUsuario = Users.find(user => user.email === email && user.password === password)

    if (!validadorUsuario) {

        return alert('Usuario y/o contraseña incorrectos!')

    }

    alert('Bienvenido ' + validadorUsuario.name)
    window.location.href = '../index.html'


   console.log(Users);

})