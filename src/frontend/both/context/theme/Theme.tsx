"use client";

import React,{ createContext , ReactNode , useContext  } from "react";
import { colors } from "./color";
import { fonts } from "./font";

type ThemeContext ={
    colors:typeof colors,
    fonts :typeof fonts,
} 

type ThemeProviderProps = {
    children:ReactNode
}

const ThemeContext = createContext<ThemeContext|undefined>(undefined);


export const ThemeProvider = ({ children }: ThemeProviderProps) =>{

    const values ={colors,fonts}

    return(
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
};