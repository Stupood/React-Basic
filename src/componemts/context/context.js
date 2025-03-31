import { createContext, useContext, useReducer } from "react";
import { rootReducer,initialState } from "../data/reducer/reducer";

const DataContext = createContext(null)
export function DataProvider({children}){
    const [state,dispatch] = useReducer(rootReducer,initialState)
    return (
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)