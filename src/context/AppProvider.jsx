import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const navigate = useNavigate();
    const { width, height } = useWindowDimensions();
    const commonBreakPoint = [320, 480, 768, 1024, 1025, 1200];

    return (
        <AppContext.Provider
            value={{
                
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
