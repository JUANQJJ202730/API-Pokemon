function buscarPersonaje() {
    let url = "https://pokeapi.co/api/v2/pokemon"
    

    
    
    fetch(url).then (respuesta =>{
        console.log(respuesta)
        respuesta.json().then(datos =>{
            console.log(datos)
            imprimirPersonajes(datos.results)
            
        })
    })
    .catch(error =>{
        console.log(error)
    })
    
}

function imprimirPersonajes(list = []) {
    list.forEach(results =>{
        let imagen = results.url
        fetch(imagen).then(respuestas => respuestas.json())
        .then(datos => {
            let imagenPokemon = datos.sprites.front_default
            document.querySelector(`#printer`).innerHTML += `
            <div class="card rounded-circle" style="width: 18rem; background-image: url(https://media.tenor.com/8sTMqGWjYAQAAAAC/ball-pokemon.gif); background-repeat: no-repeat; background-size: cover;">
                <img src="${imagenPokemon}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${results.name}</h5>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                    <p class="card-text"></p>
                </div>
            </div>`
        })
        
    })
}


buscarPersonaje()
