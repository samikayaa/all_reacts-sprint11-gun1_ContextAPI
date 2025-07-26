import { createContext, useContext } from "react";



const CardContext = createContext();

export const useCardContext = useContext(CardContext);

