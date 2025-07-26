import { useContext, useState } from "react";
import { createContext } from "react";
import { data } from './data';


const ProductContext = createContext();
export const useProducts = useContext(ProductContext);



export default function ProductContextProvider({ children }) {

    const [products, setProducts] = useState(data);

    retrun(
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
};