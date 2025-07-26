import { createContext, useContext, useState } from "react";


const CartContext = createContext();
export const useCartContext = useContext(CartContext);



export default function CartContextProvider({ children }) {

    const [cart, useCart] = useState();


    const addItem = (item) => {
        // verilen itemi sepete ekle
    };

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    )
}