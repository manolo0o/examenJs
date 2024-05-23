//____________________________________________________________________	
// Consultas propuestas //

/* - Filtrar películas por año de lanzamiento.

- Filtrar películas por actor.


- Filtrar películas por rango de IMDb.

- Consulta los títulos de todas las películas.

- Consulta los títulos y años de lanzamiento originales de todos los contenidos (películas y programas de TV).

- Consulta los identificadores y títulos de todas las películas.

- Consulta las URL completas y los tipos de objetos (películas y programas de TV).

- Consulta los títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas. */

//____________________________________________________________________	


async function getMovies(){
    const data = await fetch("https://justwatch.imdbot.workers.dev/?q=Niram&L=en_IN");
    return data.json();
}

//console.log( getMovies()); 

// Filtrar películas por año de lanzamiento.

const moviesPerYear = async() => {	
    let data = await res.json();
	let dataUpdate = data.map(val => {
        return {
            title: val.TITLE,
            year: val.YEAR
        }
	});
	return dataUpdate;
}

// Filtrar películas por actor.