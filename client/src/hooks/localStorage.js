import { useState } from 'react';

export const localStorage = (key, initialMode) => {
    const [storedMode, setStoredMode] = useState (() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialMode;
    });
    const setMode = mode => {
        setStoredMode(mode);
        window.localStorage.setItem(key, JSON.stringify(mode));
    };
    return [storedMode, setMode];
};