import React, { useState } from 'react'
import { SaveLocalStorage } from '../../helpers/SaveLocalStorage';

const CrearPeliculas = ({setMoviesList}) => {
    const tituloComponente = "Crear película";

    const [pelicula, setPelicula] = useState({});

    //Desestructuración de objetos (desestructuro el estado pelicula)
    const {title, description} = pelicula;

    const handleSubmitForm = (e) => {
        e.preventDefault();

        let formData = e.target;
        let title = formData.title.value;
        let description = formData.description.value;

        let movie = {
            id: new Date().getTime(),
            title: title,
            description: description
        };

        setPelicula(movie);

        //Guarda el objeto pelicula (movie) en el estado principal App.js actualizandolo
        setMoviesList(pelicula => {
            return [
                ...pelicula,
                movie
            ];
        });

        SaveLocalStorage("peliculas", pelicula);
    }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <b>{(title && "has creado la película "+title)}</b>

        <form onSubmit={e => handleSubmitForm(e)}>
            <input 
                type="text"
                name="title"
                placeholder="Título" />
            <textarea 
                name="description" 
                placeholder="Descripción"></textarea>

            <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default CrearPeliculas