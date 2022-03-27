import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header"
import Home from "./components/homepage/homepage"
import Movie from "./components/movie/movie";
import Seats from "./components/seats/seats";

export default function App() {
    return (
        <BrowserRouter>
         <Header />
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/sessoes/:idFilme" element={<Movie />} />
         <Route path="/assentos/:idSessao" element={<Seats />} />
         </Routes>
        </BrowserRouter>
    )
}