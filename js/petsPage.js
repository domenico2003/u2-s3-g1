class Pet {
  constructor(nomeAnimale, nomePadrone, specie, razza) {
    this.petName = nomeAnimale;
    this.ownerName = nomePadrone;
    this.species = specie;
    this.breed = razza;
  }

  static padrone(obj1, obj2) {
    if (obj1.ownerName === obj2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
// let esempio1=new Pet("Luigi","Mario","cane","labrador")
// let esempio2=new Pet("Daniele","Giacomo","gatto","soriano")
// let esempio3=new Pet("Wario","Mario","coniglio","nano")

// let risultato1=Pet.padrone(esempio1,esempio2)
// let risultato2=Pet.padrone(esempio1,esempio3)

// console.log("primo risultato",risultato1)
// console.log("secondo risultato",risultato2)

// seleziono gli input e il bottone
let animale = document.querySelector("#nomeAnimale");
let padrone = document.querySelector("#nomePadrone");
let tipoAnimale = document.querySelector("#specie");
let nomeRazza = document.querySelector("#razza");
let invio = document.querySelector("#invio");

//creo gli oggetti e li salvo in un array
//creo tags e classi  per mostrare gli oggetti e li mostro
// avvio il tutto con un eventListener
let objArray = [];
let target = document.querySelector("#target");
invio.addEventListener("click", () => {
  let namePet = animale.value;
  let nameOwnwer = padrone.value;
  let typePet = tipoAnimale.value;
  let nameBreed = nomeRazza.value;

  let newObj = new Pet(namePet, nameOwnwer, typePet, nameBreed);

  objArray.push(newObj);
  // console.log(objArray)

  animale.value = null;
  padrone.value = null;
  tipoAnimale.value = null;
  nomeRazza.value = null;

  function stampa() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    div.classList.add("alert");
    div.classList.add("alert-info");
    div.classList.add("text-center");

    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    let ultimoElem = objArray.length - 1;

    let animale = objArray[ultimoElem].petName;
    let owner = objArray[ultimoElem].ownerName;
    let species = objArray[ultimoElem].species;
    let razze = objArray[ultimoElem].breed;

    p.textContent = `nome animale: ${animale};`;
    p1.textContent = `nome padrone: ${owner}; `;
    p2.textContent = `specie: ${species};`;
    p3.textContent = `razza: ${razze};`;
    console.log(objArray);
    target.appendChild(div);
  }
  stampa();
});
