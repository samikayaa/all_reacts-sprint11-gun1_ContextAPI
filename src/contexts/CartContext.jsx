import { createContext, useState } from "react";


export const CartContext = createContext();


export default function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        // verilen itemi sepete ekle
        setCart([...cart, item]);
    };

    const removeItem = (id) => {
        // verilen itemi sepetten çıkar......
        setCart(cart.filter(item => item.id !== id))
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}