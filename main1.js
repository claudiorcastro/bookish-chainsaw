class Articulos {
    constructor(id, nombre, img, detalle, precio){
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.detalle = detalle;
        this.precio = precio;
        this.cantidad = 1;
    }
}

const fernet = new Articulos(1, "Fernet Branca 1L.", "imagenes/fernet.jpg", "lorem", 2100);
const whisky = new Articulos(2, "Johnnie Walker 1L.", "imagenes/jw.jfif", "lorem", 7100);
const vino = new Articulos(3, "Rutini Malbec 750ml", "imagenes/rutini.jpg", "lorem",4500);
//const whisky2 = new Articulos(4, "Johnnie Walker 1L.", "imagenes/jw.jfif", "lorem", 7100);

const articulos = [fernet, whisky, vino];

let carrito = [];

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

console.log(articulos);

const contenedorArticulos = document.getElementById("contenedorArticulos");

const mostrarArticulos = () => {
    articulos.forEach((articulo) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12", "w-auto", "m-2");
        card.innerHTML = `
            <div class="card p-1">
                <h2 class="card-tittle">${articulo.nombre}</h2>
                <img src="${articulo.img}" class="card-img-top imgArticulo w-auto" alt="${articulo.nombre}">
                <p class="description">${articulo.detalle}</p>
                <div class="d-flex justify-content-end pe-2">
                    <p class="text-center"> Precio: $</p>
                    <p class="card-text">${articulo.precio}</p>
                </div>
                <button class="btn colorBoton" id="boton${articulo.id}"> Comprar </button>
            </div>
        `;
        contenedorArticulos.appendChild(card);

        const boton = document.getElementById(`boton${articulo.id}`);
        boton.addEventListener("click", () => {
            AgregaralCarrito(articulo.id) 
        });
    })
}

const AgregaralCarrito = (id) => {
    const articulo = articulos.find((articulo) => articulo.id === id);
    const articuloenCarrito = carrito.find((articulo) => articulo.id === id);
    if(articuloenCarrito){
        articuloenCarrito.cantidad++;
    }else { 
        carrito.push(articulo);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calcularTotal();
}

mostrarArticulos();

const LaCompra = document.getElementById("LaCompra");
const VerCompra = document.getElementById("VerCompra");

const mostrarArticulo = () => {
	LaCompra.innerHTML = "";
	carrito.forEach((articulo) => {
		const card = document.createElement("div");
		card.classList.add("col-xl-3", "col-md-6", "col-xs-12", "m-2");
		card.innerHTML = `
	<div class="card p-1">
	<h2 class="card-tittle">${articulo.nombre}</h2>
	<img src="${articulo.img}" class="card-img-top imgArticulo w-auto" alt="${articulo.nombre}">
	<p class="description">${articulo.detalle}</p>
    <div class="d-flex justify-content-start">
    <p class="text-center">Cantidad: </p>
    <p class="card-text">${articulo.cantidad}</p>
    </div>
	<div class="d-flex justify-content-end pe-2">
    <p class="text-center"> Precio: $</p>
	<p class="card-text">${articulo.precio}</p>
	</div>
	<button class="btn colorBoton" id="eliminar${articulo.id}">Eliminar Compra</button>
	</div>
	`;
		LaCompra.appendChild(card);

		const boton = document.getElementById(`eliminar${articulo.id}`);
		console.log(boton);
		boton.addEventListener("click", () => {
			eliminarLaCompra(articulo.id);
		});
	})
    calcularTotal()
};

VerCompra.addEventListener("click", () => {
	mostrarArticulo();
});

const eliminarLaCompra = (id) => {
    const Articulo = carrito.find((articulo) => articulo.id === id);
    const indice = carrito.indexOf(Articulo);
    carrito.splice(indice, 1);
    mostrarArticulo()
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const EliminarCompra = document.getElementById("EliminarCompra");
EliminarCompra.addEventListener("click", () => {
    eliminarTodo();
})

const eliminarTodo = () => {
    carrito = [];
    mostrarArticulo();
    localStorage.clear();
}

const total = document.getElementById("TotalCompra");
const calcularTotal = () => {
    let totalcompra = 0;
    carrito.forEach((articulo) =>{
        totalcompra += articulo.precio * articulo.cantidad;
    })
    total.innerHTML = `TotalCompra: $${totalcompra}`;
}

