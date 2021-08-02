import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    let sharedState = { hi: 3 }

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
