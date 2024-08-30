import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Logout from '../auth/Logout'
import { isLoggedInContext } from '../../contexts/isLoggedInContext'
import { useContext } from 'react'

function Home() {
    const isLoggedIn = useContext(isLoggedInContext)

    if(isLoggedIn === true){
        return(
            <Logout />
        )
    }else{
        return (
            <div>
                <Login />
                <Signup />
            </div>
        )
    }

}

export default Home
