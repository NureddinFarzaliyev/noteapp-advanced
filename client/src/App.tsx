import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./hooks/useAuth"
import { useEffect  } from "react"
import { isLoggedInContext } from "./contexts/isLoggedInContext"

function App() {
  const {auth, isLoggedIn, isLoading} = useAuth()
  useEffect(() => {auth(); console.log(isLoggedIn)}, [])

  if(isLoading !== true){
    return (
      <>
      <Toaster />
      <isLoggedInContext.Provider value={isLoggedIn}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </BrowserRouter>
      </isLoggedInContext.Provider>
      </>
    )
  }else{
    return 'loading'
  }

}

export default App
