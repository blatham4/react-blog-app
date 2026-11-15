import { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}