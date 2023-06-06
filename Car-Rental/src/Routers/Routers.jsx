import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
import CarListing from "../Pages/CarListing";
import CarDetails from "../Pages/CarDetails";
import Contact from "../Pages/Contact";

export default function Routers() {
    return (
        //router pages file
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cars" element={<CarListing/>}/>
            <Route path="/cars/:slug" element={<CarDetails/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/blogs/:slug" element={<BlogDetails/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
};