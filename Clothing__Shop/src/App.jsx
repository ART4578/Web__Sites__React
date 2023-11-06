import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Layout from "./Layout/Layout";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:id" element={<Products/>}/>
            <Route path="/product/:id" element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;