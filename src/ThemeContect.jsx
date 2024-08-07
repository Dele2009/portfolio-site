import {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme, setTheme]= useState('dark')

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            setTheme(savedTheme);
        }
    },[])

    const toggleTheme = () =>{
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

