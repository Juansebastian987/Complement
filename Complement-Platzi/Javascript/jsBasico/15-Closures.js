const papa = (nuevoHijo) =>{
    var cantidadDeHijos = 0;
    const crearHijos = (nuevoHijo) =>{
        cantidadDeHijos += nuevoHijo;
        console.log(`cantidad de hijos = ${cantidadDeHijos}`)
    }
    return crearHijos;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de hijos = 1
traigamosHijosAlMundo(1)  // cantidad de hijos = 2
traigamosHijosAlMundo(1)  // cantidad de hijos = 3


const moneyCounter = (i) => {
    const counts = () => {
      console.log(`valor $${++i}`);
    };
    return counts;
  };
  
  const counter = moneyCounter(10)
  counter() // valor 11
  counter() // valor 12


  const person = () => {
    let saveName = "Name";
    return {
      getName: () => saveName,
      setName: (name) => {
        saveName = name;
      },
    };
  };
  
  const newPerson = person();
  console.log(newPerson.getName());
  newPerson.setName('Juan');
  console.log(newPerson.getName());