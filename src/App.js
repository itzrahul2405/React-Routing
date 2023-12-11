import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Product from "./components/Pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <Route path="/Welcome">
          <Welcome />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
      </main>
    </div>
  );
}

export default App;
