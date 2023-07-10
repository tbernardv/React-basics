export const SaveLocalStorage = (llave, film) => {
    //Conseguir los elementos que ya tenemos en local storage
    let elementos = JSON.parse(localStorage.getItem(llave));

    //Comprobar si es una array
    if(Array.isArray(elementos)){
        //Agregar un elemento nuevo al array - (agregamos el estado pelicula)
        elementos.push(film);
    } else{
        //Creamos un array nuevo con el estado de pelicula
        elementos = [film];
    }

    //Guardar en el LocalStorage
    localStorage.setItem(llave, JSON.stringify(elementos));
}