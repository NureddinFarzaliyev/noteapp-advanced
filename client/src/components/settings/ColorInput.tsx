import { CustomizeProps } from './Customize'

interface ColorInputProps extends CustomizeProps {
    inputName: string;
    inputFieldName: string;
}

function ColorInput({preferences, setPreferences, inputName, inputFieldName, isDisabled}: ColorInputProps) {
    return (
        <label className={`flex my-2 ${isDisabled && 'opacity-20'} ${!isDisabled && "opacity-70 hover:opacity-100"} transition-all cursor-pointer`}>
            <h1 className='text-xl w-52'>{inputName}</h1>
            <input disabled={isDisabled} className='rounded-full overflow-hidden h-10 w-10' type="color" name={inputFieldName} value={preferences[inputFieldName] || ''} onChange={(e) => setPreferences({
                ...preferences,
                [e.target.name]: e.target.value 
            })} />
        </label>
    )
}

export default ColorInput
