import { createContext, useReducer } from "react";

export const PreferencesContext = createContext<PreferencesType | undefined>(undefined)
export const PreferencesDispatchContext = createContext<React.Dispatch<ActionType>>(() => {})

interface PreferencesType {
    theme: string | null;
    backgroundColor?: string | null;
    accentColor?: string | null;
    textColor?: string | null;
    textSize?: number | null;
}

interface ActionType {
    type: string;
    payload?: Partial<PreferencesType>;
}

const initialPreferences:PreferencesType = {
    theme: "dark",
    backgroundColor: "black",
    accentColor: "blue",
    textColor: "white",
    textSize: 16,
}

function preferencesReducer (state:PreferencesType, action:ActionType) {
    switch (action.type) {
        case "dark":
            return {
                ...state,
                theme: "dark",
                backgroundColor: "black",
                accentColor: "blue",
                textColor: "white",
            };
        case "light":
            return {
                ...state,
                theme: "light",
                backgroundColor: "white",
                accentColor: "blue",
                textColor: "black",
            };
        case "custom":
            return {
                ...state,
                ...action.payload,
                theme: "custom",
            }
        default:
            return state;
    }
}

function ThemeContextProvider({children}: any) {
    const [preferences, dispatch] = useReducer(preferencesReducer, initialPreferences)
    console.log(preferences)
    return (
        <PreferencesContext.Provider value={preferences}>
            <PreferencesDispatchContext.Provider value={dispatch}>
                {children}
            </PreferencesDispatchContext.Provider>
        </PreferencesContext.Provider>
    )
}

export default ThemeContextProvider