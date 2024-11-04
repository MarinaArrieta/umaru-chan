import { conexionAPI } from "./conexionAPI.js";
import createCard from "./listCharacters.js";

async function filtrarPersonaje(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    let busqueda = await conexionAPI.buscarPersonajes(datosDeBusqueda);

    const listCharacters = document.querySelector("[data-lista]");

    while(listCharacters.firstChild){
        listCharacters.removeChild(listCharacters.firstChild);
    }
    busqueda.forEach(character => listCharacters.appendChild(createCard(character.nombre, character.tipo, character.descripcion, character.imagen)));

    if(busqueda.length === 0){
        listCharacters.innerHTML = `<h2 style="height:47vh; display:flex; align-items: center;font-size: 1.5rem; font-family: 'Roboto', sans-serif; text-align: center; color: #4d3630">No fueron encontrados elementos para ${datosDeBusqueda} 😕</h2>`;
    }

}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento=>filtrarPersonaje(evento))