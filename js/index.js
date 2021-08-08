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

function Seoane (nombre, direccion, rubro, desde, propietario){
    this.nombre = nombre;
    this.direccion = direccion;
    this.rubro = rubro;
    this.desde = desde;
    this.propietario = propietario;
}

const seoane = new Seoane ("Seoane","Mar del Plata","joyeria","2015","Angela");

console.log(seoane);

