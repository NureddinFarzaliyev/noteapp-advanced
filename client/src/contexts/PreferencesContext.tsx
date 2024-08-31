import { createContext, useEffect, useState } from "react";
import { fetchPreferences } from "../utils/fetchPreferences";

export const PreferencesContext = createContext<PreferencesType | unknown>(undefined)

export type ThemeTypes = 'light' | 'dark' | 'custom'
export interface PreferencesType {
    theme: ThemeTypes | null;
    backgroundColor?: string | null;
    accentColor?: string | null;
    textColor?: string | null;
    textSize?: number | null;
}

function PreferencesContextProvider({children}: any) {
    const [preferences, setPreferences] = useState<PreferencesType | unknown>()

    useEffect(() => {
        fetchPreferences().then(data => setPreferences(data))
    }, [])

    return (
        <PreferencesContext.Provider value={preferences}>
            {children}
        </PreferencesContext.Provider>
    )
}

export default PreferencesContextProvider