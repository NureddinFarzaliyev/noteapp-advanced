import { useChangeUserData } from "../../hooks/useChangeUserData"
import { useHandleChange } from "../../hooks/useHandleChange"

function ChangePassword() {
    const {changeData, handleChange} = useHandleChange()
    const {changeDataFn, isLoading} = useChangeUserData()

    return (
        <div>
            <h1>Change Password</h1>
            <input type="text" name='newPassword' placeholder="New Password" onChange={(e) => {handleChange(e)}} />
            <input type="text" name='password' placeholder="Old Password" onChange={(e) => {handleChange(e)}} />
            <button onClick={() => {changeDataFn(changeData, 'password')}}>Change Password</button>
            {isLoading === true && <p>Loading</p>}
        </div>
    )
}

export default ChangePassword
