var nombre = prompt("¿Cuál es tu nombre?");
alert("Bienvenido a mi página, " + nombre);
let x = 5;
let y = 6;
let z = x + y;
alert("z: " + z);
let edad = prompt("¿Cuál es tu edad?");
let mensaje = "";
if (edad < 18) {
    mensaje = "No puedes entrar a esta página";
} else {
    mensaje = "Bienvenido a esta página";
}
alert(mensaje);