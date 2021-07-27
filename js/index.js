let persona = "SANTIAGO GASPAROTTI"
let domicilio = "ARTURO ALIO 1234"
let pais = "ARG"
let nacimiento = "05/11/1996"
const codigo = "39873433";

let carnet = "Codigo: "+codigo+ " "+
            "Nombre: "+persona+ " "+
            "Pais: "+pais+ " "+
            "Nacimiento: "+nacimiento+ " "+
            "Domicilio: "+domicilio;

console.log(carnet)


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

for (let i = 1; i <=15; i++) {
    let Nombre = prompt("Ingrese su nombre para registrarse en nuestro sitio web")
    alert("Hola " + Nombre + " sos el registro Nº " + i + " Muchas gracias por elegir nuestro sitio web")
    if (i == 10) {
        alert("No hay mas cupos para registrarse")
        break
    }
}

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