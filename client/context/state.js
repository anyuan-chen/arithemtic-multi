import { createContext, useContext } from 'react';
import io from "socket.io-client"
const AppContext = createContext();
const ENDPOINT = "http://localhost:4000"

export function AppWrapper({ children }) {
    let sharedState = { socket: io(ENDPOINT) }

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    let context = useContext(AppContext);
    return context;
}
