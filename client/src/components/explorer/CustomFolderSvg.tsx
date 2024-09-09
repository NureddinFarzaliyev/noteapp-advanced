import { useContext } from "react"
import { PreferencesContext } from "../../contexts/PreferencesContext"
import { darkenHexColor } from "../../utils/darkenHex"

function CustomFolderSvg() {

    const preferences = useContext(PreferencesContext)

    return (
        <svg width="80" height="74" viewBox="0 0 80 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.66667 13.3333C2.98467 13.3333 0 16.3333 0 20V66.6667C0 70.3333 2.98477 73.3333 6.66667 73.3333H73.3333C77.0167 73.3333 80 70.3333 80 66.6667V20C80 16.3333 77.0167 13.3333 73.3333 13.3333H6.66667Z" fill={preferences?.accentColor && darkenHexColor(preferences?.accentColor, 30)}/>
        <path d="M9.99998 0C6.31798 0 3.33331 3 3.33331 6.66667V53.3333C3.33331 57 6.31798 60 9.99998 60H46.6666H63.3333H70C73.6833 60 76.6666 57 76.6666 53.3333V23.3333V13.3333C76.6666 9.66667 73.6833 6.66667 70 6.66667H63.3333H46.6666H43.3333L33.3333 0H9.99998Z" fill={preferences?.accentColor && darkenHexColor(preferences?.accentColor, 30)}/>
        <path d="M76.6666 43.3333V16.6667C76.6666 13 73.6833 10 70 10H33.3333H16.6666H9.99998C6.31798 10 3.33331 13 3.33331 16.6667V43.3333H76.6666Z" fill="#BDC3C7"/>
        <path d="M6.66667 13.3333C2.98467 13.3333 0 16.3333 0 20V40V43.3333V63.3333C0 67 2.98477 70 6.66667 70H73.3333C77.0167 70 80 67 80 63.3333V43.3333V40V20C80 16.3333 77.0167 13.3333 73.3333 13.3333H6.66667Z" fill={preferences?.accentColor}/>
        </svg>
    )
}

export default CustomFolderSvg
