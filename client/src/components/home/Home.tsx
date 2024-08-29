import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Logout from '../auth/Logout'

function Home() {
    return (
        <div>
            <Login />
            <Signup />
            <Logout />
        </div>
    )
}

export default Home
