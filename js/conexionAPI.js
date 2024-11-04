async function umaruChan() {
    const conexion = await fetch("http://localhost:3001/umaru");
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function crearCharacters(nombre,tipo,descripcion,imagen){
    const conexion = await fetch("http://localhost:3001/umaru",{
        method:"POST",
        headers:{"Content-type":"aplication/json"},
        body:JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            tipo:tipo,
            descripcion:descripcion,
        })
    })
    const conexionConvertida=conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al registrar el personaje 😕");
    }

    return conexionConvertida;
}

async function buscarPersonajes(palabraClave) {
    let url = `http://localhost:3001/umaru?q=${palabraClave}`
    const conexion= await fetch(url);
    console.log(url)
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    umaruChan, crearCharacters, buscarPersonajes
}