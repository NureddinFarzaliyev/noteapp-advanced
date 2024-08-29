import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"

function Login() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const {login, isLoading} = useLogin()


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                <input type="text" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => {login(loginData, e)}}>Login</button>
                <p>{isLoading === true ? 'loading' : null}</p>
            </form>
        </div>
    )
}

export default Login
