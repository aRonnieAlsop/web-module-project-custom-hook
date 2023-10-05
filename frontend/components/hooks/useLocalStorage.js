import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    //get the saved value from localStorage
    const savedValue = JSON.parse(localStorage.getItem(key))
    //initialize sate with saved or initial val
    const [value, setValue] = useState(savedValue || initialValue)
    //function to update & store new value
    const setStoredValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }
    //return state value and function
    return [value, setStoredValue]
}

export default useLocalStorage