import { useState, useEffect } from "react"
import PeliculaCard from "./PeliculaCard"
import { useParams } from "react-router-dom"
import { API_URL } from "./App"

function Detalles() {

    const {id} = useParams()
    const [pelicula, setPelicula] = useState()

    const buscarPelicula = async (id)  => {
        let data = null
        const respuesta = await fetch(`${API_URL}/${id}`)
        if (respuesta.ok) {
            data = await respuesta.json()
            setPelicula(data)
        }
    }

    useEffect(() =>{
        buscarPelicula(id)
    }, [id])

    return (
        <>
           {
            (pelicula != null)
            ?(
                <div className="container">
                    <PeliculaCard pelicula={pelicula} key={pelicula.peliculaId}/>
                    <div className="movie-desc">{pelicula.sinopsis}</div>
                </div>
            ):
            (
                <div className="empty">
                    <h2>No se encontro la pelicula</h2>
                </div>
            )
           }
        </>
    )
}

export default Detalles