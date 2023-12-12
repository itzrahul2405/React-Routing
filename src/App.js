import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Product from "./components/Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/Pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path='/product-detail/:productId'>
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
