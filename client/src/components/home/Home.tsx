import Login from '../auth/Login'
import Signup from '../auth/Signup'
import { isLoggedInContext } from '../../contexts/isLoggedInContext'
import { useContext } from 'react'
// import Settings from '../settings/Settings'
import Explorer from '../explorer/Explorer' 
import { PreferencesContext } from '../../contexts/PreferencesContext'

function Home() {
    const isLoggedIn = useContext(isLoggedInContext)
    const preferences = useContext(PreferencesContext)

    if(isLoggedIn === true){
        return(
            <div className='min-h-dvh w-dvw' 
            style={{backgroundColor: preferences?.backgroundColor, color: preferences?.textColor}}>
                {/* <Settings /> */}
                <Explorer />
            </div>
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
