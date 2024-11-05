async function umaruChan() {
    const conexion = await fetch("http://localhost:3001/umaru");
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function crearCharacters(nombre,tipo,descripcion,imagen){
    console.log("nombre", nombre)
    console.log("tipo", tipo)
    console.log("descripcion", descripcion)
    console.log("imagen", imagen)
    const conexion = await fetch("http://localhost:3001/umaru",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            
            nombre:nombre,
            tipo:tipo,
            descripcion:descripcion,
            imagen:imagen,
        })
    })

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al registrar el personaje 😕");
    }
    console.log('aqui')
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function buscarPersonajes(palabraClave) {
    const url = `http://localhost:3001/umaru?q=${palabraClave}`
    const conexion= await fetch(url);
    console.log(url)
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    umaruChan, crearCharacters, buscarPersonajes
}