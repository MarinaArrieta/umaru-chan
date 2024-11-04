import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearCharacters(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const tipo = document.querySelector("[data-tipo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.crearCharacters(nombre, tipo, descripcion, imagen);

        window.location.href="../pages/envio-concluido.html"
    }
    catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit",evento => {
    crearCharacters(evento)});