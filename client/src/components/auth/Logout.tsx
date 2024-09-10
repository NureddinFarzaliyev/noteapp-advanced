import { useLogout } from "../../hooks/useLogout"

function Logout() {
    const {isLoading, logout} = useLogout()

    return (
        <div>
            <button className={`py-1 w-28 my-2 flex justify-center items-center opacity-80 hover:opacity-100 transition-all rounded bg-[var(--accent-color)]`} onClick={(e) => {logout(e)}}>
                {isLoading === true ? 'Loading' : 'Log out'}
            </button>
        </div>
    )
}

export default Logout
