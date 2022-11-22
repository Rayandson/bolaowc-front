import { createContext, useState } from "react";

export const ActiveContext = createContext();

export function ActiveContextProvider({children}) {
    const [active, setActive] = useState("ranking");
    return(
        <ActiveContext.Provider value={{active, setActive}}>
            {children}
        </ActiveContext.Provider>
    )
}