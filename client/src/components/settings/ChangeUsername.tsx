import { useChangeUserData } from "../../hooks/useChangeUserData"
import { useHandleChange } from "../../hooks/useHandleChange"

function ChangeUsername() {
    const {changeData, handleChange} = useHandleChange()
    const {changeDataFn, isLoading} = useChangeUserData()

    return (
        <div className="flex flex-col items-start gap-3 mt-8">
            <h1 className="text-2xl">Change Username</h1>
            <input className="bg-transparent border-b-2 border-b-[var(--accent-color)] py-1" type="text" name='newUsername' placeholder="Type New Username" onChange={(e) => {handleChange(e)}} />
            <input className="bg-transparent border-b-2 border-b-[var(--accent-color)] py-1" type="text" name='password' placeholder="Enter your Password" onChange={(e) => {handleChange(e)}} />
            <button disabled={isLoading} className="bg-[var(--accent-color)] w-44 py-1 rounded opacity-80 hover:opacity-100 transition-all mt-2" onClick={() => {changeDataFn(changeData, 'username')}}>{isLoading === true ? "Loading..." : 'Change Username'}</button>
        </div>
    )
}

export default ChangeUsername