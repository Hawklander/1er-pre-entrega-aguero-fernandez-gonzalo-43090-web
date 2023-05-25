//NOTAS COMO FUNCIONA EL SISTEMA 

/* sistema de compra de productos
 Login Validacion usuario y contraseña
 Galeria de productos
 Seleccion del prodcutor por el usuario ( seleccion multiple , en tipo y cantidad)
 Los productos de agregan a un carrito (lista de compra)
 calculos de precios totales 
 Toma de datos del cliente para realizar el pago ( nombre, apellido y tarjeta de credito)
 Aviso de pago realizado
 limpieza de variables . cierre de sesion */

// estas variables son los prompt para que el usuario complete su credenciales.
let usuarioIngresado = prompt("Ingresar Usuario") 
let contraseñaIngresada = prompt("Ingresar Contraseña")

// este el estado para saber si el usuario esta logeado o no 
let estado = false;

// este es la base de datos de usuarios
let arrayDeUsuarios = [
    {
        usuario: "holatarola",
        contraseña: "1234",
    },
    {
        usuario: "chautarola",
        contraseña: "4321",
        
    }
]

// este es la base de datos de productos
let arrayDeProdcutos = [
    {
        nombre: "Mila soja clasica",
        precio: 250,
        id: 1

    },

    {
        nombre: "Mila soja rellena JyQ",
        precio: 400,
        id: 2

    },

    {
        nombre: "Mila soja rellena QyC",
        precio: 350,
        id: 3

    },
]

let carrito= []

let preciofinal= 0

// esta funcion valida el usuario 

function login(us, ps) {

    let existeUsuario = arrayDeUsuarios.find(elementoDentroDeMiObjeto => elementoDentroDeMiObjeto.usuario === us  && elementoDentroDeMiObjeto.contraseña === ps );

    if (existeUsuario) {
        estado = true
        console.log("El Usuario Se Encuentra Logueado");
    } else{
        console.log("El Usuario No Existe");
    }

};


// esta funcion agrega  los productos seleccionados al carrito

function agregarCarrito(idDelProductoBuscar) {
    

    let seleccionDeProducto = arrayDeProdcutos.find(elementoDentroDeMiObjeto => elementoDentroDeMiObjeto.id === 
    idDelProductoBuscar);

    carrito.push (seleccionDeProducto)
let totalDeProductosEnElCarrito = carrito.length
    console.log(`En el Carrito Hay : ${totalDeProductosEnElCarrito} Productos`);
 
}

// esta funcion calcula el precio total 

function calcularPrecio() {

    if (estado) {

        let precioCalculado = 0
        for (let posicionDelProducto = 0; posicionDelProducto < carrito.length; posicionDelProducto++) {
            
            const producto = carrito[posicionDelProducto];
            let precioDelProducto  = producto.precio
            precioCalculado = precioCalculado+precioDelProducto
             
        }
    
        
        preciofinal = precioCalculado
    
        console.log(`El Precio Final A Pagar es  $ ${preciofinal}`);
        terminarCompra()
    
    } else {

        console.log("El Usuario No Esta Logeado");
    
    }
   
}

// esta funcion toma los  articulos y le pide los datos al cliente para finalizar la compra
function terminarCompra () {
    let totalDeProductosEnElCarrito = carrito.length
    let nombre = prompt("Ingresar nombre")
    let apellido = prompt("Ingresar apellido")
    let tarjetaDeCredito = prompt("Ingresar N° tarjeta de credito")
    let ultimo4NumerosDeLaTarjeta = tarjetaDeCredito.slice(-4)
    console.log(`Gracias ${nombre} ${apellido} por comprar ${totalDeProductosEnElCarrito}, por un valor de $ ${preciofinal} y sera cobrado de tu tarjeta: **** **** **** ${ultimo4NumerosDeLaTarjeta}`);
    cerrarSesion()

}


// aca se empiezan a ejecutar las funciones
login (usuarioIngresado, contraseñaIngresada)

agregarCarrito (3) // esto simula el apretar el boton de agregar el producto al carro

agregarCarrito (2)// esto simula el apretar el boton de agregar el producto al carro

calcularPrecio () // simula el boton de ir a pagar y llama a la funcion terminar compra donde pide datos del usuario y " cobra "



