import { useSignup } from "../../hooks/useSignup"
import { useHandleChange } from "../../hooks/useHandleChange"

function Signup() {
    const {changeData, handleChange} = useHandleChange()
    const {signup, isLoading} = useSignup(changeData)

    return (
        <div>
            <form className="text-white flex flex-col gap-5 items-start">
                <h1 className="mt-10 text-xl">Create New Account</h1>
                <input className="bg-transparent border-b-2 border-b-cyan-900 focus:border-b-cyan-400 transition-all py-1" type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                <input className="bg-transparent border-b-2 border-b-cyan-900 focus:border-b-cyan-400 transition-all py-1" type="text" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                <input className="bg-transparent border-b-2 border-b-cyan-900 focus:border-b-cyan-400 transition-all py-1" type="text" name="confirm" placeholder="Confirm Password" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => {signup(e)}} className="bg-cyan-700 px-10 py-1 rounded shadow-md hover:bg-cyan-900 transition-all w-40">Register</button>
                <p>{isLoading === true ? 'loading' : null}</p>
            </form>
        </div>
    )
}

export default Signup
