import { createContext, useContext, useState } from "react";


const CartContext = createContext();
export const useCartContext = useContext(CartContext);



export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState();


    const addItem = (item) => {
        // verilen itemi sepete ekle
        setCart([...cart, item])
    };

    const removeItem = () => {
        // verilen itemi sepetten çıkar......

    }

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    )
}