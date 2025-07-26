import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export const CartContext = createContext();


export function CartContextProvider({ children }) {

    const [cart, setCart] = useLocalStorage("s11g1", []); //useState([]);

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