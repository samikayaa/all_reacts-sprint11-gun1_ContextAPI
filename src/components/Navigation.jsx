import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScNav } from './scParts';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const Navigation = (props) => {

  const { cart } = useContext(CartContext); //bunu yazdık.

  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
