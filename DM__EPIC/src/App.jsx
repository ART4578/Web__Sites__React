import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Info from "./Pages/Info/Info";
import Settings from "./Pages/Settings/Settings";
import Auth from "./Pages/Auth/Auth"; 

function App() {
  return (
    //router pages files and components file 
    <>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/> 
            <Route path="/home" element={<Home/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/settings" element={<Settings/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;