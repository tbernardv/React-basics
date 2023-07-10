import { useState } from "react";
import Buscador from "./components/peliculas/Buscador";
import CrearPeliculas from "./components/peliculas/CrearPeliculas";
import { Footer } from "./components/peliculas/Footer";
import Header from "./components/peliculas/Header";
import Listado from "./components/peliculas/Listado";
import Navbar from "./components/peliculas/Navbar";

function App() {
    const [moviesList, setMoviesList] = useState([]);
  return (
    <div className="layout">
        
        {/* Cabecera */}
        <header className="header">
            <Header />
        </header>

        {/* Barra de navegación */}
        <nav className="nav">
            <Navbar />
        </nav>

        {/* Contenido principal */}
        <section className="content">
            {/* Aqui van las películas - El listado */}
            <Listado moviesList={moviesList} setMoviesList={setMoviesList} />
        </section>

        {/* Barra lateral */}
        <aside className="lateral">
            <Buscador />
            <CrearPeliculas setMoviesList={setMoviesList}/>
        </aside>

        <footer className="footer">
            <Footer />
        </footer>

    </div>
  );
}

export default App;
