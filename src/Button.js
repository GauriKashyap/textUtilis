// tutorial : https://www.makeuseof.com/react-dark-mode-without-context/ 
import { useState,useEffect} from 'react'
 
export default function Button() {

    const [theme, settheme] = useState("dark")
    const storeUserSetPreference = (pref) => {
        localStorage.setItem("theme", pref);
    };
    const getUserSetPreference = () => {
        return localStorage.getItem("theme");
    };
    useEffect(() => {
        const userSetPreference = getUserSetPreference();
     
        if (userSetPreference) {
            settheme(userSetPreference)
        }
        document.body.dataset.theme = theme
    }, [theme])
    const handleToggle = () => {
        const newTheme = theme ==="light" ? "dark" : "light"
        settheme(newTheme)
        storeUserSetPreference(newTheme)
        document.body.dataset.theme = theme
    }
    return (
        <>
            <button className="btn btn-primary mx-1 mb-1" onClick={handleToggle}>
                {theme=== "light" ? <span>dark</span> : <span>light</span>}
            </button>
        </>
    )
}