
const user= JSON.parse(localStorage.getItem(login__success)) || false
if (!user) {

    window.location.href = 'login.html'
    
}

