import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./movie.css"
import Footer from '../footer/footer';
import loading from "./../../assets/loading.gif";

export default function Movie() {
    const [session, setSession] = useState({ days: [] });
    const { idFilme } = useParams();
    
     useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        
        requisition.then(response => {
            setSession(response.data);
            console.log(response)
        });
        requisition.catch(error => console.log(error.response));
        }, []);

    
        if(session.length === 0) {
          return (
            <img src={loading}/>
          )
         } else {      

         return (
        <>  
            <div className="movie-session">
              <h1 className="movie-title">Selecione o horário</h1>
            </div>
               {session.days.map(({ id, weekday, date, showtimes }) => (
              <div className="movies-sessions" key={id}>
                <p className="movie-date">{weekday} - {date}</p>
              <div className="movies-showtime">
              {showtimes.map(({ id, name }) => (
              <Link to={`/assentos/${id}`} key={id}>
                <button className="movie-time">{name}</button>
              </Link>
            ))}
            </div>
            </div>
         ))}
         <Footer url={session.posterURL} title={session.title}/>
       </> 
        
        )
      }
    }