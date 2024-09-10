import { isLoggedInContext } from '../../contexts/isLoggedInContext'
import { useContext } from 'react'
import Explorer from '../explorer/Explorer' 
import { PreferencesContext } from '../../contexts/PreferencesContext'
import NotLoggedIn from './NotLoggedIn'

function Home() {
    const isLoggedIn = useContext(isLoggedInContext)
    const preferences = useContext(PreferencesContext)

    if(isLoggedIn === true){
        return(
            <div className='min-h-dvh w-dvw' 
            style={{backgroundColor: preferences?.backgroundColor, color: preferences?.textColor}}>
                <Explorer />
            </div>
        )
    }else{
        return (
            <NotLoggedIn />
        )
    }

}

export default Home