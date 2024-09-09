import { useContext } from "react"
import { PreferencesContext } from "../../contexts/PreferencesContext"

interface ButtonProps{
    children: any;
    width?: number;
}

function ExplorerButton({children, width} : ButtonProps) {
    const preferences = useContext(PreferencesContext)
    return (
        <button style={{backgroundColor: preferences?.accentColor}} 
            className={`${width ? `w-${width}` : 'w-10'} flex items-center justify-center rounded h-8 opacity-80 hover:opacity-100 transition-all`}>
            {children}
        </button>
    )
}

export default ExplorerButton
