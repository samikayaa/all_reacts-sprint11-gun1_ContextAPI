import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { data } from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContextProvider } from "./contexts/ProductContext";


function App() {

  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekle
  };


  return (
    <ProductContextProvider>
      <div className="App">
        <Navigation cart={cart} />
        <main className="content">
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <ShoppingCart cart={cart} />
          </Route>
        </main>
      </div>
    </ProductContextProvider>
  );
}


export default App;



