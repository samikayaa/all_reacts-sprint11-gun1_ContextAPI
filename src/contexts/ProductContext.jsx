import { useState } from "react";
import { createContext } from "react";


const ProductContext = createContext();

export default function ProductContextProvider({ children }) {

    const [products, setProducts] = useState();



    retrun(
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
};