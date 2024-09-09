import { useState, useContext, useEffect } from "react"
import { PreferencesType, ThemeTypes } from "../../contexts/PreferencesContext";
import { PreferencesContext } from "../../contexts/PreferencesContext";
import { usePreferences } from "../../hooks/usePreferences";
import Customize from "./Customize";

export interface PreferencesPageType {
    theme: ThemeTypes;
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
    textSize?: number;
    [key: string]: string | undefined | number;
}

function Preferences() {
    const [theme, setTheme] = useState<ThemeTypes>('dark')

    const preferencesContext = useContext(PreferencesContext)
    const {updatePreferencesOnServer, isLoading, isChanged} = usePreferences()

    const [preferences, setPreferences] = useState<PreferencesPageType>({
        theme: "custom",
        accentColor: undefined,
        backgroundColor: undefined,
        textColor: undefined,
        textSize: undefined
    })

    useEffect(() => {
        setPreferences({
            theme: "custom",
            accentColor: preferencesContext?.accentColor,
            backgroundColor: preferencesContext?.backgroundColor,
            textColor: preferencesContext?.textColor,
            textSize: preferencesContext?.textSize
        })
    }, [preferencesContext])

    const saveHandler = async () => {
        if(theme !== 'custom'){
            let body:PreferencesType = {
                theme: theme == 'dark' ? 'dark' : 'light',
                backgroundColor: theme == 'dark' ? "#000000" : "#ffffff",
                accentColor: "#3498DB",
                textColor: theme == 'dark' ? '#ffffff' : "#000000",
                textSize: preferences.textSize
            }
            updatePreferencesOnServer(body)
        }else{
            console.log(preferences)
            updatePreferencesOnServer(preferences)
        }

    }

    return (
        <div className='  p-2'>
            <h1>Preferences</h1>

            <select name="theme" id="theme" onChange={(e) => {setTheme(e.target.value as ThemeTypes)}}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="custom">Custom</option>
            </select>

            <i>Choose "Custom" to customize further.</i> <br />

            <Customize isDisabled={theme !== 'custom'} setPreferences={setPreferences} preferences={preferences} />

            <button onClick={() => {saveHandler()}}>{isLoading == true ? 'Please wait...' : 'Save Changes'}</button>
            <button onClick={() => {location.reload()}} disabled={!isChanged}>Apply</button>

            {/* <pre>{JSON.stringify(preferencesContext, null, 2)}</pre> */}
        </div>
    )
}

export default Preferences
