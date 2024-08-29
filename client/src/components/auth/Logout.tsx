import { useLogout } from "../../hooks/useLogout"

function Logout() {
    const {isLoading, logout} = useLogout()

    return (
        <div>
            <button onClick={(e) => {logout(e)}}>logout</button>
            <p>{isLoading === true && 'loading' }</p>
        </div>
    )
}

export default Logout
