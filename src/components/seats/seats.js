import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import loading from "./../../assets/loading.gif";
import "./seats.css";

export default function Seats() {
    const [seat, setSeat] = useState({ seats: [] });
    const { idSessao } = useParams();

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        
        requisition.then(response => {
            setSeat(response.data);
            console.log(response)
        });
        requisition.catch(error => console.log(error.response));
        }, []);

    return (
        <div className="seats">
        <h1 className="seats-title">Selecione o(s) assento(s)</h1>
        <div className="all-seats">
        {seat.seats.map(({name, id}) =>  {
            return (
                
                <button className="seats-number">{name}</button>
                
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
        <div className="seats-input">
        <label>Nome do comprador:</label>
        <input type="text" placeholder="Digite seu nome..."></input>
        <label>CPF do comprador:</label>
        <input type="number" placeholder="Digite seu CPF..."></input>
        </div>
        
        <button className="seat-confirmation">Reservar assentos(s)</button>
        
        </div>
    )
}