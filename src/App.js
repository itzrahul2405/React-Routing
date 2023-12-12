import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Product from "./components/Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/Pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path='/product/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
