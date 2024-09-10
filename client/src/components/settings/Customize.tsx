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
        <div>
            <ColorInput preferences={preferences} setPreferences={setPreferences} isDisabled={isDisabled} 
            inputName="Background Color" inputFieldName="backgroundColor" />
            <ColorInput preferences={preferences} setPreferences={setPreferences} isDisabled={isDisabled} 
            inputName="Accent Color" inputFieldName="accentColor"/>
            <ColorInput preferences={preferences} setPreferences={setPreferences} isDisabled={isDisabled} 
            inputName="Text Color" inputFieldName="textColor" />

            <TextSizeRange preferences={preferences} setPreferences={setPreferences} isDisabled={isDisabled} />
        </div>
    )
}

export default Customize
