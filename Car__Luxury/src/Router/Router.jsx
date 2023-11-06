import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import BMW from "../Pages/BMW";
import Contact from "../Pages/Contact";
import Cars from "../Pages/Cars";
import CarDetails from "../Pages/CarDetails";

export default function Router() {
    return (
        //router pages files and component files
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/bmw" element={<BMW/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/cars" element={<Cars/>}/>
                    <Route path="/bmw/:slug" element={<CarDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};