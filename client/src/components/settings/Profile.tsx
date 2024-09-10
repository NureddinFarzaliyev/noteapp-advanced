import Logout from "../auth/Logout"

interface ProfileProps {
    username: string
}

function Profile({ username }:ProfileProps) {
    return (
        <div>
            <p>Current Username: <b>{username}</b></p>
            <Logout />
        </div>
    )
}

export default Profile
