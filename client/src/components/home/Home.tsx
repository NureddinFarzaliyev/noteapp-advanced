import Login from '../auth/Login'
import Signup from '../auth/Signup'
import { isLoggedInContext } from '../../contexts/isLoggedInContext'
import { useContext } from 'react'
import Settings from '../settings/Settings'
import Explorer from '../explorer/Explorer' 

function Home() {
    const isLoggedIn = useContext(isLoggedInContext)

    if(isLoggedIn === true){
        return(
            <>
                <Settings />
                <Explorer />
            </>
        )
    }else{
        return (
            <>
                <Login />
                <Signup />
            </>
        )
    }

}

export default Home
