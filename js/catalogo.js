const productos = [
    {
        nombre: "REMERA",
        precio: 1200,
        marca: "adidas"
    },
    {
        nombre: "PANTALON",
        precio: 5000,
        marca: "Hardway"
    },
    {
        nombre: "Zapatillas",
        precio: 20000,
        marca: "Puma"
    },
    {
        nombre: "Buzo",
        precio: 10000,
        marca: "Sin marca"
    }
];

const divProducto = document.getElementById("productos");
const divCarrito = document.getElementById("mostrarCarrito");
const divCarritoTotal = document.getElementById("totalCarrito");
const verCarrito = document.getElementById("carritoBtn");

let carrito = [];

productos.forEach((producto) => {
    let content = document.createElement("div");
    content.innerHTML = `
    <h2>${producto.nombre}</h2>
    <p>${producto.precio}</p>
    `;

    divProducto.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al carrito"
    content.append(comprar);
    comprar.addEventListener("click", () => {
        carrito.push({
            marca: producto.marca,
            nombre: producto.nombre,
            precio: producto.precio
        });
    });

});

let carritoMostrar;

verCarrito.addEventListener("click", () => {
    divCarrito.innerHTML = "";
    divCarritoTotal.innerHTML = "";
    carrito.forEach((carrito1) => {
        let carritocontenido = document.createElement("div");
        carritocontenido.innerHTML = `
        <h2>${carrito1.nombre}</h2>
        <p>${carrito1.precio}</p>
        `;
        divCarrito.append(carritocontenido);
    });

    
    const total = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);
    const totalComprado = document.createElement("div");
    if (total != 0) {
        totalComprado.innerHTML = `<h2>Total a pagar: ${total} $ </h2>`;
        divCarritoTotal.append(totalComprado);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    carrito = [];
})

carritoMostrar = localStorage.getItem("carrito");
console.log(carritoMostrar);