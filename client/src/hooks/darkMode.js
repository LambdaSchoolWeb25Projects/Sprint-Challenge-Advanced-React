import { localStorage } from './localStorage';
import { useEffect } from 'react';

export function darkMode(value) {
    const [darkMode, setDarkMode] =  localStorage(value)
    useEffect(() => {
        const body = document.querySelector('body')
        darkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode')
    }, [darkMode])
        return [darkMode, setDarkMode]
}