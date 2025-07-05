import React, { createContext } from 'react'
export const Contner = createContext();
import data from '../JSON_DATA/data.json';
export const ContnerData = ({ children }) => {

    return (
        <Contner.Provider value={data}>
            {children}
        </Contner.Provider>
    )
}

export default Contner