import React from 'react'

const Buscador = () => {
  return (
    <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
            <input type="text" placeholder="Buscar..." />
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Buscador