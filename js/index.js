// let persona = "SANTIAGO GASPAROTTI"
// let domicilio = "ARTURO ALIO 1234"
// let pais = "ARG"
// let nacimiento = "05/11/1996"
// const codigo = "39873433";

// let carnet = "Codigo: "+codigo+ " "+
//             "Nombre: "+persona+ " "+
//             "Pais: "+pais+ " "+
//             "Nacimiento: "+nacimiento+ " "+
//             "Domicilio: "+domicilio;

// console.log(carnet)


// let registroUsuario = prompt("ingresa nombre de usuario");

// if (registroUsuario == "") {
//     alert("No Ingresaste el nombre de usuario, no podemos registrarte, necesitas ingresar un nombre de usuario.")
// }
// else {
//     alert("¡Registro exitoso! Su nombre de usuario es: " + registroUsuario);
// }

//ciclos

// for ([inicializacion];[condicion][expresion final]) {
//     //sentencias o declaracion
// }

//contar de  0 a 9 

//i = index

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     alert(i) ;
// }

// en cada repeticion solicitamos un nombre

// let Nombre = prompt("ingresar su nombre aqui" + i);
// //informamos el turno asignado 
// alert("Turno Nº" + i + "Nombre: "+ ingresarNombre);

//ejemplo 01 ciclo

// for (let i = 1; i <=15; i++) {
//     let Nombre = prompt("Ingrese su nombre para registrarse en nuestro sitio web")
//     alert("Hola " + Nombre + " sos el registro Nº " + i + " Muchas gracias por elegir nuestro sitio web")
//     if (i == 10) {
//         alert("No hay mas cupos para registrarse")
//         break
//     }
// }

//WHILE

// while (condicion) {
//     sentencias
// }

// let repetir = false;
// do{
//     console.log("Solo una vez!!");

// }   while(repetir)

//SWITCH

// let numero = 10;

// switch (numero) {
//     case 5:
//       console.log  ("respuesta es 5");
//         break;
//         case 8:
//       console.log  ("respuesta correcta")
//             break;
//             default:
//                 ("respuesta incorrecta")
//                 break;
// }

// if (numero == 8) {
//     console.log ("respuesta correcta")
// } else if (numero == 5){
//     console.log ("respuesta es 5");
// } else {
//     console.log ("respuesta incorrecta");
// }

//FUNCIONES


// function presentacion() {
//     console.log("¡Hola, bienvenidos a nuestro sitio web!. ¿como te llamas?");
// }

// presentacion();




// function presentacion(){
//     let nombreIngresado   = prompt("¡Hola, bienvenidos a nuestro sitio web!. ¿como te llamas?");
//     alert("Encantados de conocerte " + nombreIngresado + ", que disfrutes de nuestro sitio web");
// } 

// const suma = (primerNumero, segundoNumero) => primerNumero + segundoNumero

// function suma(primerNumero, segundoNumero)
// {
//     return primerNumero + segundoNumero
// }

// const resta = (primerNumero, segundoNumero) => primerNumero - segundoNumero

// function resta(primerNumero, segundoNumero)
// {
//     return primerNumero - segundoNumero
// }

// const multiplicar = (primerNumero, segundoNumero) => primerNumero * segundoNumero

// function multiplicar(primerNumero, segundoNumero)
// {
//     return primerNumero * segundoNumero
// }

// const dividir = (primerNumero, segundoNumero) => primerNumero / segundoNumero

// function dividir(primerNumero, segundoNumero)
// {
//     return primerNumero / segundoNumero
// }

// const iva = primerNumero => ((primerNumero * 0.21) + primerNumero)

// let nuevoPrecio = resta(suma(resultadoIva, iva(primerNumero)), precioDescuento); 
// console.log(nuevoPrecio);

// const total = (primerNumero, resultadoIva) => primerNumero + resultadoIva

// function mostrar(mensaje, resultado)
// {
//     console.log(mensaje, resultado)
// }

// function pedirNumeroUno(numero)
// {
//     numero = Number(prompt("Ingrese un valor, seguido de enter ingrese otro valor para realizar la ecuacion: "))
//     return numero
// }

// function pedirNumeroUno(numero)
// {
//     numero = Number(prompt("Ingrese el monto de su factura para indicarle el valor final mas IVA : "))
//     return numero
// }

// function pedirNumeroDos(numero)
// {
//     numero = Number(prompt("Ingrese la palabra *total* para sumar la factura mas el iva"))
//     return numero
// }

// let respuesta

// do{

//     console.log("Precio de factura mas IVA: ")
//     numeroA = pedirNumeroUno()

// let operacion = prompt("Operaciones que puede realizar, elija una de ellas: suma, resta, multiplicar o dividir")     
// let operacion = prompt("Ingrese la palabra *iva* para confirmar la operacion")     

// numeroB = pedirNumeroDos()

// switch(operacion)

// {
//     case "iva":
//         let resultadoIva = iva (numeroA)
//         mostrar("Su factura mas IVA es un total de: " ,resultadoIva)
//         break;
//     case "total":
//          let resultadoFinal = (primerNumero, resultadoIva)
//         mostrar("precio final ",final)
//         break;
//     case "suma":
//         let resultadoSuma = suma (numeroA, numeroB)
//         mostrar("El resultado de la suma es: ", resultadoSuma)
//         break;
//     case "resta":
//         let resultadoResta = resta(numeroA, numeroB)
//         mostrar("\no El resultado de la resta es ", resultadoResta )
//         break;
//     case "multiplicar":
//         let resultadoMultiplicar = multiplicar(numeroA, numeroB)
//         mostrar("\no El resultado de la multiplicacion es: ", resultadoMultiplicar)
//         break;
//     case "dividir":
//         let resultadoDividir = dividir(numeroA, numeroB)
//         mostrar("\no El resultado de la division es: ", resultadoDividir)
//         break;
// }

// respuesta = prompt("¿Desea realizar otra consulta de factura mas iva? *si* para seguir/*no* para cerrar")
// }while(respuesta == "si")

//OBJETOS

// function Seoane (nombre, direccion, rubro, desde, propietario){
//     this.nombre = nombre;
//     this.direccion = direccion;
//     this.rubro = rubro;
//     this.desde = desde;
//     this.propietario = propietario;
// }

// const seoane = new Seoane ("Seoane","Mar del Plata","joyeria","2015","Angela");

// console.log(seoane);

//STORAGE

// let comidas = localStorage.getItem("comidas");

// if (comidas == null) {
//     for(let i = 0; i < 5; i++){
//         menubar.push(prompt("Ingrese comida"));
//     }
//     localStorage.setItem("comidas",menu);
// } else { //SI TIENE DATOS, SI EL localStorage TIENE VALOR
//    let menu = " ";
//    let arrayComidas = comidas.split(",");

//     for (const nombreComida of arrayComidas){
//        menu = menu + nombreComida + ("\n");
//     }
//    alert(menu);
// }

//ARRAY

// const producto = ["anillo", "cadena", "pulcera", "dijes", ];

// const productoOtros = ("oro");

// producto.push('aros')
// producto.push('dijes')
// producto.push('plata')


// const todosLosProductos = producto.concat(productoOtros);

// console.log(todosLosProductos)

// let nuevosproductos = []
// let productos = localStorage.getItem("productos")
// if (!productos) {
//     for (let i = 0; i < 5; i++) {
//         let producto = prompt("Ingrese producto")
//         nuevosproductos.push(producto)
//     }
//     localStorage.setItem("productos", nuevosproductos)
// } else {
//     alert(`sus productos son ${productos}`)
// }



// ARRAY OBJETO

// const producto = [
//     {
//         id: "anillo",
//         nombre: "fresha",
//         material: "oro",
//         diseño: "unico"
//     },
//     {
//         id: "aros",
//         nombre: "persa",
//         material: "plata",
//         deseño: "importado"
//     },
// ]

// console.log(producto);

// const joyas = ["Aros", "Anillos", "Cadenas", "Pulceras", "dijes",]

// let contenedor = document.getElementById("joyeria")

// for (const nombre of joyas) {
//     let li = document.createElement("li");

//     li.innerHTML = nombre;
//     contenedor.appendChild(li);
// }

// class Producto {
//     constructor(nombre, precio, img) {
//         this.nombre = nombre.toLowerCase(),
//             this.precio = Number(precio),
//             this.img = img
//     }
// }

// const carrito =[];

// function baseDeDatos(){
//     let entrada = true
//     do{
//         let nombre = prompt('ingresar un producto');
//         let precio = prompt('ingresar su precio');
//         let img = 'https://www.google.com/search?q=joyas&rlz=1C1SQJL_esAR862AR862&sxsrf=ALeKk0168HNmIpHYAMp5cjPFXQ1D9XrV_A:1628890515114&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj1up-E-q7yAhUOpJUCHTsPDYUQ_AUoAXoECAIQAw&biw=1600&bih=789#imgrc=vxsBFruLcMF0RM'

//         let producto1 = new Producto(nombre,precio,img);
//         carrito.push(producto1)
        
//         entrada = confirm('quieres seguir ingresando productos?')
//     }while(entrada);

// }

// baseDeDatos()
// console.table(carrito)


// function comprar(producto){
//     let miCompra = carrito.find(element => element.nombre == producto.toLowerCase())
//     return miCompra
// }

// let busqueda = prompt('Que productos quieres comprar?')
// let comprarAlgo = comprar(busqueda)

// console.log(comprarAlgo)


// PROYECTO REAL
const productos = [
    {
        nombre:'Anillo',
        descripcion: 'Lorem ipsum dolor sit.',
        precio: 5500,
        id:1,
        cantidad: 1,
    },
    {
        nombre:'Aros',
        descripcion: 'Lorem ipsum dolor sit.',
        precio: 2000,
        id:2,
        cantidad: 1,
    },
    {
        nombre:'Collar',
        descripcion: 'Lorem ipsum dolor sit.',
        precio: 8000,
        id:3,
        cantidad: 1,
    },
    {
        nombre:'Dije',
        descripcion: 'Lorem ipsum dolor sit.',
        precio: 2900,
        id:4,
        cantidad: 1,
    },
    {
        nombre:'Perla',
        descripcion: 'Lorem ipsum dolor sit.',
        precio: 7500,
        id:5,
        cantidad: 1,
    },
    {
        nombre:'Alaja',
        descripcion: 'Lorem ipsum dolor sit.',
        precio: 15000,
        id:6,
        cantidad: 1,
    },
    ]
    
    
    // MIS VARIABLES GLOBALES
    let container = document.querySelector('.container')
    let divCarrito = document.querySelector('.modal-body')
    const carrito = []
    
    
    
    // FUNCION PARA AGREGAR PRODUCTOS AL HTML

    function pintarCards(){
        for (const element of productos) {
            let div = document.createElement('div')
            div.className = 'col-sm-4'
            div.innerHTML = `<div class="card">
            <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">${element.descripcion}</p>
            <p>$${element.precio}</p>
            <button id="${element.id}" class="btn btn-dark">Agregar al carrito</button>
            </div>
            </div>`
            
            container.appendChild(div)
            
            let button = document.getElementById(`${element.id}`)
            button.onclick = agregarAlCarrito
        }
    }
    
    pintarCards()
    
    
    function agregarAlCarrito(){
        const seleccionado = productos.find(producto => producto.id == this.id);
        const existe = carrito.find(producto => producto.id == this.id)
        let posicion = carrito.indexOf(existe)
    
    
        
        if (carrito.length == 0){
            
            carrito.push(seleccionado)
            
        }else if(existe == undefined){
            
            carrito.push(seleccionado)
            
        }else{
            
            carrito[posicion].cantidad += 1
            
        }
        
        console.log(carrito)

        localStorage.setItem("carrito", JSON.stringify(carrito))

        divCarrito.innerHTML = ``
    
    
        for (const element of carrito) {
            let div = document.createElement('div')
            div.innerHTML = `
            <h4>${element.nombre}</h4>
            <p>$${element.precio}</p>
            <p>Cantidad :${element.cantidad}</p>
            <button class="btn btn-danger">X</button>`
    
            divCarrito.appendChild(div)
    
            
            
        }
    
    

    }
    
    $(document).ready(
        function (){
            if ("carrito" in localStorage){
                const data = JSON.parse(localStorage.getItem("carrito"))
                for(const dato of data){
                    console.log(productos[nombre])
                    carrito.push(productos[nombre],productos[descripcion],productos[precio],productos[id],productos[cantidad])
                }
                console.log(carrito)
                console.log(productos[nombre])

                agregarAlCarrito()
            }
        }
    )

    