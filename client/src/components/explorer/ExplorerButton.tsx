import { useContext } from "react"
import { PreferencesContext } from "../../contexts/PreferencesContext"

function ExplorerButton({children}: {children: any}) {
    const preferences = useContext(PreferencesContext)
    return (
        <button style={{backgroundColor: preferences?.accentColor}} 
            className='w-10 p-2 flex items-center justify-center rounded h-8 opacity-80 hover:opacity-100 transition-all'>
            {children}
        </button>
    )
}

export default ExplorerButton
