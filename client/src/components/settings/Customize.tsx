import { PreferencesPageType } from "./Preferences";
import ColorInput from "./ColorInput";
import TextSizeRange from "./TextSizeRange";

export interface CustomizeProps {
    isDisabled?: boolean;
    setPreferences: React.Dispatch<React.SetStateAction<PreferencesPageType>>;
    preferences: PreferencesPageType;
}


function Customize({isDisabled, setPreferences, preferences} : CustomizeProps) {

    
    return (
        <>
            <p>DISABLED: {String(isDisabled)}</p>
            <ColorInput preferences={preferences} setPreferences={setPreferences} 
            inputName="Background Color" inputFieldName="backgroundColor" />
            <ColorInput preferences={preferences} setPreferences={setPreferences} 
            inputName="Accent Color" inputFieldName="accentColor" />
            <ColorInput preferences={preferences} setPreferences={setPreferences} 
            inputName="Text Color" inputFieldName="textColor" />

            <TextSizeRange preferences={preferences} setPreferences={setPreferences} />
        </>
    )
}

export default Customize
