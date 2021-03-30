const elementos= ["piedra","papel","tijera"];

let user = prompt("Ingresa tú jugada");
let machine = Math.floor(Math.random() * (3 - 1)) + 1;

switch(true){
    /*
    Empate
    */
    case (user === elementos[machine]):
        console.log("Es empate!");
        break;
    /*
    Piedra le gana a tijera
    */
    case (user === elementos[0] && elementos[machine] === elementos[2]):
        console.log("El usuario gana!")
        break;
    /*
    Papel le gana a piedra
    */
    case (user === elementos[1] && elementos[machine] === elementos[0]):
        console.log("El usuario gana!")
        break;
    /*
    Tijera le gana a papel
    */
    case (user === elementos[2] && elementos[machine] === elementos[1]):
        console.log("El usuario gana!")
        break;
    /*
    La machina gana
     */
    default:
        console.log("La machina gana!")
}