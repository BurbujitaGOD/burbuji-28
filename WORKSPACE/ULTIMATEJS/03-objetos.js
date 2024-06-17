// personaje de TV
let nombre = "Tanjiro";
let anime = "Demon";
let edad = 16; 

let personaje ={
    nombre: "Tanjiro",
    anime: "Demon",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;
personaje['edad'] = 16;