import { useState } from 'react'

const useDarkMode = () => {
    // if there, get the saved dark mode preference from local storage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    //initialize state with saved mode or false if there isn't one
    const [darkMode, setDarkMode] = useState(savedDarkMode)
    //dark mode function:
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)
        //save setting to localStorage
        localStorage.setItem('darkMode', newDarkMode)
    }
    //return state value and the toggle function
    return [darkMode, toggleDarkMode]
}

export default useDarkMode