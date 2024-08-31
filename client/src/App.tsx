import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./hooks/useAuth"
import { useEffect  } from "react"
import { isLoggedInContext } from "./contexts/isLoggedInContext"
import PreferencesContextProvider from "./contexts/PreferencesContext"

function App() {
  const {auth, isLoggedIn, isLoading} = useAuth()
  useEffect(() => {auth();}, [])

  if(isLoading === true){
    return 'loading'
  }else{
    return (
      <>
      <Toaster />
      <isLoggedInContext.Provider value={isLoggedIn}>
      <PreferencesContextProvider>
  
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </BrowserRouter>
        
      </PreferencesContextProvider>
      </isLoggedInContext.Provider>
      </>
    )
  }

}

export default App
