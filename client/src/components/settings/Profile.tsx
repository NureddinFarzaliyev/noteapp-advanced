import Logout from "../auth/Logout"

interface ProfileProps {
    username: string
}

function Profile({ username }:ProfileProps) {
    return (
        <div>
            <p>user profile</p>
            <p>{username}</p>
            <Logout />
        </div>
    )
}

export default Profile
