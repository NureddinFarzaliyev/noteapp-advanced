import { createContext, useEffect, useState } from "react";
import { fetchPreferences } from "../utils/fetchPreferences";

export const PreferencesContext = createContext<PreferencesType | undefined>(undefined)

export type ThemeTypes = 'light' | 'dark' | 'custom'
export interface PreferencesType {
    theme: ThemeTypes;
    backgroundColor?: string;
    accentColor?: string;
    textColor?: string;
    textSize?: number;
    [key: string]: string | undefined | number;
}

function PreferencesContextProvider({children}: any) {
    const [preferences, setPreferences] = useState<PreferencesType | undefined>()

    useEffect(() => {
        fetchPreferences().then(data => setPreferences(data))
    }, [])

    useEffect(() => {
        if (preferences) {
            document.documentElement.style.setProperty('--bg-color', preferences.backgroundColor || '#000000');
            document.documentElement.style.setProperty('--accent-color', preferences.accentColor || '#3498db');
            document.documentElement.style.setProperty('--text-color', preferences.textColor || '#ffffff');
        }
    }, [preferences]);

    return (
        <PreferencesContext.Provider value={preferences}>
            {children}
        </PreferencesContext.Provider>
    )
}

export default PreferencesContextProvider