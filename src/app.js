import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header"
import Home from "./components/homepage/homepage"

export default function App() {
    return (
        <BrowserRouter>
         <Header />
         <Routes>
         <Route path="/" element={<Home />} />
         </Routes>
        </BrowserRouter>
    )
}