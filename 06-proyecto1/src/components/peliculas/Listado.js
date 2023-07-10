import React, { useEffect, useState } from 'react'

const Listado = ({moviesList, setMoviesList}) => {

    let listMovies = "";
    //const [moviesList, setMoviesList] = useState([]);

    useEffect(()=>{
        handleGetMovies();
    }, []);

    const handleGetMovies = () => {
        let movies = JSON.parse(localStorage.getItem("peliculas"));

        setMoviesList(movies);
    }

    if(moviesList != null && moviesList.length > 0){
        listMovies = moviesList.map((pelicula, indice) => {
            if(Object.keys(pelicula).length !== 0 && pelicula.title != ''){
                return (
                    <article key={indice} className="peli-item">
                        <h3 className="title">{pelicula.title}</h3>
                        <p className="description">{pelicula.description}</p>
                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>
                );
            }
        });
    }

  return (
    <>
        {listMovies != "" ? listMovies : <h2>No hay peliculas registradas!</h2>}
        
    </>
  )
}

export default Listado