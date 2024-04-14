import { useEffect, useState } from "react"
import PeliculaCard from "./PeliculaCard"
import SearchIcon from "./search.svg"
import {API_URL} from "./App"

function Home() {

    const [peliculas, setPeliculas] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const buscarPeliculas = async (titulo)  => {
        const respuesta = await fetch(`${API_URL}?s=${titulo}`)
        const data = await respuesta.json()

        setPeliculas(data)
    }
    
    useEffect(() =>{
        buscarPeliculas('')
    }, [])
    return (
        <>
            <div className="search">
                <input  type="text" placeholder="Busca una pelicula por su titulo" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
                <img src={SearchIcon} alt="Buscar" onClick={() => buscarPeliculas(busqueda)}/>
            </div>

            {
                peliculas?.length > 0
                ?(
                    <div className="container">
                        {
                            peliculas.map((pelicula) =>(
                                <PeliculaCard pelicula={pelicula} key={pelicula.peliculaid} />
                            ))
                        }
                    </div>
                ):
                (
                    <div className="empty">
                        <h2>No se encontraron pelicula</h2>
                    </div>
                )
            }
        </>
    )
}

export default Home