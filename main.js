class cliente {
    constructor(nombre, apellido, dni){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
    }
}
const clienteAyelen = new cliente ("Ayelen", "Eirin", 11111111);
const clienteClaudio = new cliente ("Claudio", "Castro", 22222222);
const clienteLeandro = new cliente ("Leandro", "Toga", 33333333);
const clienteDiego = new cliente ("Diego", "Morales", 44444444);
const arraycliente = [];
arraycliente.push(clienteAyelen);
arraycliente.push(clienteClaudio);
arraycliente.push(clienteLeandro);
arraycliente.push(clienteDiego);
console.log(arraycliente);

function menu() {
    alert("Bienvenido a Vineria El Corchazo!! \n En esta seccion hacete un usuario y disfrutaras de excelentes beneficios!!");
    let opcion = parseInt(prompt("Ingrese una opcion: \n 1)Alta de Cliente. \n 2)Baja de Cliente. \n 3)Salir."));
    return opcion;
}

function altaCliente() {
    let nombre = prompt("Ingresa tu nombre: ");
    let apellido = prompt("Ingresa tu apellido: ");
    let dni = parseInt(prompt("Ingresa tu DNI: "));
    let cliente1 = new cliente(nombre, apellido, dni);
    arraycliente.push(cliente);
    alert("Usuario creado,obtenes excelentes beneficios en la pagina!!!")
    console.log(arraycliente);
}

function bajaCliente() {
    let dni = parseInt(prompt("Ingresa tu DNI: "));
    let cliente = arraycliente.find(cliente => cliente.dni === dni);
    let bajadeCliente = arraycliente.indexOf(cliente);
    arraycliente.splice(bajadeCliente,1);
    alert("Usuario eliminado, no vas a gozar de los beneficios de El Corchazo!!!")
    console.log(arraycliente);
}

function salir() {
    alert("Gracias por pasar por El Corchazo..nos vemos a la vuelta!");
}

let opcion = menu();
switch (opcion) {
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        salir;
        break;
}
