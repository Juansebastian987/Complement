const elementos= ["piedra","papel","tijera"];

let user = prompt("Ingresa tú jugada");
let machine = Math.floor(Math.random() * (3 - 1)) + 1;

/*
Empate
*/
if(user === elementos[machine]){
    console.log("Es empate!");
}
/*
Piedra le gana a tijera
*/
else if(user === elementos[0] && elementos[machine] === elementos[2]){
 console.log("El usuario gana!")
}

/*
Papel le gana a piedra
*/
else if(user === elementos[1] && elementos[machine] === elementos[0]){
    console.log("El usuario gana!")

}

/*
Tijera le gana a papel
*/
else if(user === elementos[2] && elementos[machine] === elementos[1]){
    console.log("El usuario gana!")
}

/*
Papel le pierde con tijera
*/
else {
    console.log("La machina gana!")
}