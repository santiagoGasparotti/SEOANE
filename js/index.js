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


let registroUsuario = prompt("ingresa nombre de usuario");

if (registroUsuario == "") {
    alert("No Ingresaste el nombre de usuario, no podemos registrarte, necesitas ingresar un nombre de usuario.")
}
else {
    alert("¡Registro exitoso! Su nombre de usuario es: " + registroUsuario);
}