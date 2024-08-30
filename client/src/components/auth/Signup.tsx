import { useSignup } from "../../hooks/useSignup"
import { useHandleChange } from "../../hooks/useHandleChange"

function Signup() {
    const {changeData, handleChange} = useHandleChange()
    const {signup, isLoading} = useSignup(changeData)

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
