import './App.css';
import React from 'react'
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Product from './components/Products';

function App() {
  return (
    <div className="App">
      <Route path='/Welcome'>
        <Welcome />
      </Route>
      <Route path='/Product'>
        <Product />
      </Route>
    </div>
  );
}

export default App;
