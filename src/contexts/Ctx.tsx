import { createContext, ReactNode, useState } from "react"

type CtxProviderProps = {
    children: ReactNode
}

interface AppContextInterface {
    darkMode: boolean;
    setDarkMode: (n: boolean | ((val: boolean) => boolean)) => void;
}

const Ctx = createContext({darkMode: false} as AppContextInterface)

export const CtxProvider = ({children}:CtxProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Ctx.Provider value={{
            darkMode, setDarkMode
        }}>
            {children}
        </Ctx.Provider>
    )
    
}

export default Ctx
