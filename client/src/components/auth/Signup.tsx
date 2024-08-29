import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"

function Signup() {
    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
        confirm: ''
    })

    const {signup, isLoading} = useSignup(registerData)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="Username" onChange={(e) => handleChange(e)} />
                <input type="text" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                <input type="text" name="confirm" placeholder="Confirm Password" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => {signup(e)}}>Register</button>
                <p>{isLoading === true ? 'loading' : null}</p>
            </form>
        </div>
    )
}

export default Signup
