import { useLogin } from "../../hooks/useLogin"
import { useHandleChange } from "../../hooks/useHandleChange"

function Login() {
    const {changeData, handleChange} = useHandleChange()
    const {login, isLoading} = useLogin()

    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                <input type="text" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => {login(changeData, e)}}>Login</button>
                <p>{isLoading === true ? 'loading' : null}</p>
            </form>
        </div>
    )
}

export default Login
