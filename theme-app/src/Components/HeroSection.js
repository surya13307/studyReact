import React,{useContext} from 'react';
import AppTheme from '../color';
import ThemeContext from "../Context/ThemeContext";


const HeroSection = () => {
    const [mode,setMode] = useContext(ThemeContext)
    // const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[mode]

    return(
        <div style = {{
            padding : "1rem",
            backgroundColor : `${currentTheme.backgroundColor}`,
            color : `${currentTheme.textColor}`,
            textAlign : "center"
        }}>
            <h1>
                Context API theme toggler
            </h1>
            <p>This is a nice page</p>
            <button onClick = {()=>{setMode(mode === "light" ? "dark" :"light")}} 
            style = {{
                backgroundColor : "#26ae60",
                padding : "10px 150px",
                fontSize : "20px",
                color : "#ffffff",
                border : `${currentTheme.border}`            
        }}>Click Me</button>
        </div>
    )
}
export default HeroSection;