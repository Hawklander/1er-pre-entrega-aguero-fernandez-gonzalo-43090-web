

saludar()

let userGuardado = "Tarola";
let passGuardado = "123456";
let ingresaPass = false;
let ingresaUser = false;


function saludar() {
    alert("Hola bienvenido/a a Genesis");
}

for (let i = 2; i >= 0; i--) {

    let ingresoElUsuario = prompt("ingresa tu usuario , Tenes " + (i + 1) + " Oportunidades")
    let ingresoElPass = prompt("ingresa tu contraseña , Tenes " + (i + 1) + " Oportunidades")

    if (ingresoElUsuario == userGuardado && (ingresoElPass == passGuardado)) {
        alert("Bienvenido Usuario Tarola.");
        ingresaUser = true;
        break;
    }
    else {
        alert("Lo sentimos hubo un error , Vuelva intentar")
    }
}



if (ingresaUser) {

    let Saldo = 10000;
    let opcion = prompt(
        "Elegi una opcion: \n1- Saldo. \n2- Retiro. \n3- Deposito. \nPresiona X para finalizar.");

    while (opcion != "x") {

        switch (opcion) {
            case "1":
                
                alert("Tu Saldo es: $" + Saldo);
                
                break;
            case "2":
                let Retiro = parseInt(prompt(" Ingresa el monto a retirar"))
                let SaldoTotal = Saldo - Retiro
                Saldo = SaldoTotal
                if (Retiro < 10000 && Retiro > 0) {
                    alert(SaldoTotal)
                }
                else {

                    alert("Saldo Insuficiente")

                }
                break;
            case "3":
                let Deposito = parseInt(prompt("Ingresa el monto a depositar"));
                let DepositoTotal = Saldo + Deposito;
                Saldo = DepositoTotal;

                alert(DepositoTotal)
                break;

        }

        opcion = prompt(
            "Elegi una opcion: \n1- Saldo. \n2- Retiro. \n3- Deposito. \nPresiona X para finalizar.");
    }



}









