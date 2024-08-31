import { CustomizeProps } from './Customize'

interface ColorInputProps extends CustomizeProps {
    inputName: string;
    inputFieldName: string;
}

function ColorInput({preferences, setPreferences, inputName, inputFieldName}: ColorInputProps) {
    return (
        <label>
            {inputName}
            <input type="color" name={inputFieldName} value={preferences[inputFieldName] || ''} onChange={(e) => setPreferences({
                ...preferences,
                [e.target.name]: e.target.value 
            })} />
        </label>
    )
}

export default ColorInput
