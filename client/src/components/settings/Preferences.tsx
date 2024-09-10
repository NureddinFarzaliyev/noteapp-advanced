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
        <div className='p-2'>
            <p className="w-[80%]">Use options below to customize the app. Select <b>Dark</b> or <b>Light</b> theme or choose <b>Custom</b> to create your own Theme.</p>

            <select className="bg-[var(--accent-color)] px-5 py-1 rounded w-min mt-5 mb-10" name="theme" id="theme" onChange={(e) => {setTheme(e.target.value as ThemeTypes)}}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="custom">Custom</option>
            </select>

            <Customize isDisabled={theme !== 'custom'} setPreferences={setPreferences} preferences={preferences} />

            <div className="mt-5 absolute bottom-12">
                <button className={`bg-[var(--accent-color)] mr-1 py-1 px-5 rounded opacity-70 hover:opacity-100 transition-all`} onClick={() => {saveHandler()}}>{isLoading == true ? 'Please wait...' : 'Save Changes'}</button>
                <button className={`${isChanged && 'bg-[var(--accent-color)]'} py-1 px-5 rounded opacity-70 disabled:hover:opacity-70 hover:opacity-100 transition-all`} onClick={() => {location.reload()}} disabled={!isChanged}>Apply Changes</button>
            </div>
        </div>
    )
}

export default Preferences
