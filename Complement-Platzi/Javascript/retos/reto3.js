
let listAutos = [];
let modelos =new Array("Modelo 1", "Modelo 2", "Modelo 3", "Modelo 4", "Modelo 5", "Modelo 6");
let marcas =new Array("Tesla", "Mazda", "Nissan", "BMW", "Audi", "Porshe");

function auto(marca, modelo, annio) {  
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(let i=0; i<30; i++){
    let annio =  Math.floor(Math.random() * (2022 - 1950)) + 1950;
    let varRandom=Math.floor((Math.random())*5);
    let newAuto = new auto(marcas[varRandom], modelos[varRandom], annio);
    listAutos.push(newAuto);
}

for(const iterator of listAutos) {
    console.log(`Auto con modelo ${iterator.modelo} de la marca ${iterator.marca} del año ${iterator.annio}`);
}