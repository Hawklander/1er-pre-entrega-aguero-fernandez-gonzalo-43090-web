// Variables

const resgitroForm = document.querySelector('#registrar')
resgitroForm.addEventListener('click' , (e)=> {

    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users =JSON.parse(localStorage.getItem('users')) || []
    const usuarioRegistrado = Users.find(user => user.email === email )
    if (usuarioRegistrado) {

        return alert ('Usuario ya esta registrado')
        
    }

    Users.push ({name: name , email: email, password: password})
    localStorage.setItem ('users' , JSON.stringify(Users))
    alert ('Resgistro exitoso')

    

})