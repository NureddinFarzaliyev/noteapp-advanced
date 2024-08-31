import { useState, useContext } from "react"
import { ThemeTypes } from "../../contexts/PreferencesContext";
import { PreferencesContext } from "../../contexts/PreferencesContext";
import { usePreferences } from "../../hooks/usePreferences";

interface PreferencesType {
    theme: ThemeTypes ;
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
    textSize?: number;
}

function Preferences() {
    const [theme, setTheme] = useState<ThemeTypes>('dark')

    const preferencesContext = useContext(PreferencesContext)
    const {updatePreferencesOnServer, isLoading, isChanged} = usePreferences()

    const [preferences, setPreferences] = useState<PreferencesType>({
        theme: "custom",
        accentColor: 'do',
        backgroundColor: 're',
        textColor: 'mi',
        textSize: 12
    })

    const saveHandler = async () => {
        let body:PreferencesType

        if(theme !== 'custom'){
            body = {
                theme: theme == 'dark' ? 'dark' : 'light',
                backgroundColor: theme == 'dark' ? "#000" : "#fff",
                accentColor: theme == 'dark' ? "#fff" : "#000",
                textColor: theme == 'dark' ? '#fff' : "#000",
            }
        }else{
            body = preferences
        }

        updatePreferencesOnServer(body)
    }

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

            <button onClick={() => {saveHandler()}}>{isLoading == true ? 'Please wait...' : 'Save Changes'}</button>
            <button onClick={() => {location.reload()}} disabled={!isChanged}>Apply</button>

            <br /> <br /> <br />
            <h1>===Current Preferences===</h1>
            <pre>{JSON.stringify(preferencesContext, null, 2)}</pre>
        </div>
    )
}

export default Preferences
