import { useState, useEffect } from 'react';
import axios from 'axios';
import "./home.css";

export default function Home() {
    const [movie, setMovies] = useState([]);
    
    useEffect(() => {
    const requisition = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

    requisition.then(response => {
        setMovies(response.data);
        console.log(response)
    });
    }, []);


    return (
        <main>
            <div className="home">
             <h1 className="home-tittle">Selecione o filme</h1>
            </div>
             <div className="all-movies">
                {movie.map((movies) => (
                    <img src={movies.posterURL} className="movie-poster"/>
                ))}
             </div>
        </main>
    )
}