import React, {useState} from "react";

function Header ({onDarkModeClick}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    function setBackground(){
        return setIsDarkMode(isDarkMode => !isDarkMode)
    }
    
    onDarkModeClick(isDarkMode)

    return (
        <header className={"App " + (isDarkMode ? "dark" : "light")}>
            <h2>Shopster</h2>
            <button onClick={setBackground}>{isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header