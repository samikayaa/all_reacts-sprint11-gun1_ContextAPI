import { useState } from "react";
import { createContext } from "react";
import { data } from '../data';


export const ProductContext = createContext();



export default function ProductContextProvider({ children }) {

    const [products, setProducts] = useState(data);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};