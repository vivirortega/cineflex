import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from '../footer/footer';
import loading from "./../../assets/loading.gif";
import "./seats.css";

export default function Seats() {
    const [seat, setSeat] = useState({ seats: [] });
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
   

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        
        requisition.then(response => {
            setSeat(response.data);
            console.log(response)
        });
        requisition.catch(error => console.log(error.response));
        }, []);
    

    function buyTicket(event) {
        event.preventDefault();

        const data = {
            name: name,
            cpf: CPF
        }

            const requisition = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", data);
            console.log(name + CPF);
            requisition.then(() => {
             navigate("/sucesso");
         });    
         requisition.catch(error => console.log(error.response));
        }

    return (
        <div className="seats">
        <h1 className="seats-title">Selecione o(s) assento(s)</h1>
        <div className="all-seats">
        {seat.seats.map(({name, id}) =>  {
            return (
                <button className="seats-number" key={id}>{name}</button>
            )
        })}
        </div>

        <div className="seats-legend">
            <div className="seat-selected">
            <div className="selected"></div>
            <p>Selecionado</p>
            </div>
            <div className="seat-available">
            <div className="available"></div>
            <p>Disponível</p>
            </div>
            <div className="seat-unavailable">
            <div className="unavailable"></div>
            <p>Indisponível</p>
            </div>
        </div>
        <form className="seats-input">
        <label>Nome do comprador:</label>
        <input type="text" placeholder="Digite seu nome..." required value={name} onChange={e => setName(e.target.value)}></input>
        <label>CPF do comprador:</label>
        <input type="number" placeholder="Digite seu CPF..." required value={CPF} onChange={e => setCPF(e.target.value)}></input>
        </form>
        
        <button className="seat-confirmation" onClick={buyTicket}>Reservar assentos(s)</button>

    
        <Footer url={seat.movie.posterURL} title={seat.movie.title} weekday={seat.day.weekday} date={seat.name}/>
        
        </div>
    )
}