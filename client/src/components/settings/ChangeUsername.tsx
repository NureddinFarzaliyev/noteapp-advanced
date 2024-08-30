import { useChangeUserData } from "../../hooks/useChangeUserData"
import { useHandleChange } from "../../hooks/useHandleChange"

function ChangeUsername() {
    const {changeData, handleChange} = useHandleChange()
    const {changeDataFn, isLoading} = useChangeUserData()

    return (
        <div>
            <h1>Change Username</h1>
            <input type="text" name='newUsername' placeholder="New Username" onChange={(e) => {handleChange(e)}} />
            <input type="text" name='password' placeholder="Password" onChange={(e) => {handleChange(e)}} />
            <button onClick={() => {changeDataFn(changeData, 'username')}}>Change Username</button>
            {isLoading === true && <p>Loading</p>}
        </div>
    )
}

export default ChangeUsername
