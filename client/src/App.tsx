import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./hooks/useAuth"
import { useEffect } from "react"

function App() {
  const {auth, isLoggedIn, isLoading} = useAuth()

  useEffect(() => {auth(); console.log(isLoggedIn)}, [])

  if(isLoading !== true){
    return (
      <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
      <p>{isLoggedIn === true ? 'logged in' : 'NOT logged in'}</p>
      </>
    )
  }else{
    return 'loading'
  }

}

export default App
