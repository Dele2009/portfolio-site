import {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [Theme, setTheme]= useState('dark')

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            setTheme(savedTheme);
        }
    },[])

    const toggleTheme = () =>{
        const newTheme = Theme === "dark" ? "light" : "dark";
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return(
        <ThemeContext.Provider value={{Theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

