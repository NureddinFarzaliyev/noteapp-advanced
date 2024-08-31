import { useContext, useState } from "react"
import { PreferencesDispatchContext } from "../../contexts/PreferencesContext"
import { ThemeTypes } from "../../contexts/PreferencesContext";

interface PreferencesType {
    theme: ThemeTypes ;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    textSize: number;
}

function Preferences() {
    const preferencesDispatch = useContext(PreferencesDispatchContext)
    
    const [theme, setTheme] = useState<ThemeTypes>('dark')
    const [preferences, setPreferences] = useState<PreferencesType>({
        theme: theme,
        accentColor: 'red',
        backgroundColor: 'green',
        textColor: 'blue',
        textSize: 12
    })

    const applyHandler = async () => {
        preferencesDispatch({type: theme, payload: preferences})  // TODO: preferences state is gonna be sent through this payload
    }

    // TODO: UPLOAD CHANGES TO SERVER 
    // TODO: GET THEME DATA FROM SERVER

    // TODO: INPUTS ENABLED WHEN CUSTOM IS CHOSEN
    // TODO: INPUTS CHANGE DATA IN USESTATE

    return (
        <div className='border-2 p-2'>
            <h1>Preferences</h1>

            <select name="theme" id="theme" onChange={(e) => {setTheme(e.target.value as ThemeTypes)}}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="custom">Custom</option>
            </select>

            <i>Choose "Custom" to customize further.</i> <br />

            <button onClick={() => {applyHandler()}}>Apply Changes</button>
        </div>
    )
}

export default Preferences
