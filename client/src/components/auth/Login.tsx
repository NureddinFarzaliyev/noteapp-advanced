import { useLogin } from "../../hooks/useLogin"
import { useHandleChange } from "../../hooks/useHandleChange"

function Login() {
    const {changeData, handleChange} = useHandleChange()
    const {login, isLoading} = useLogin()

    return (
        <div>
            <form className="text-white flex flex-col gap-5 items-start">
                <h1 className="mt-10 text-xl">Login</h1>
                <input className="bg-transparent border-b-2 border-b-cyan-900 focus:border-b-cyan-400 transition-all py-1" type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                <input className="bg-transparent border-b-2 border-b-cyan-900 focus:border-b-cyan-400 transition-all py-1" type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => {login(changeData, e)}} className="bg-cyan-700 px-10 py-1 w-40 rounded shadow-md hover:bg-cyan-900 transition-all">{isLoading ? 'Loading...' : 'Login'}</button>
            </form>
        </div>
    )
}

export default Login
