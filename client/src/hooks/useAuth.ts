import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { successToast } from "../utils/toasts"


export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const auth = async () => {
        try {
            setIsLoading(true)
            if(localStorage.getItem("noteapp-id") && localStorage.getItem('noteapp-token')){
                const result = await sendPostRequest('/auth/check', {
                    id: localStorage.getItem("noteapp-id"),
                    token: localStorage.getItem("noteapp-token")
                })
    
                if(result.success){
                    setIsLoggedIn(result.success)
                    // successToast(result.message)
                }else if(result.error){
                    console.log(result.error)
                }
            }

            setIsLoading(false)
        } catch (error: any) {
            setIsLoading(false)
            console.log(error.message)
        }
    }

    return {isLoading, auth, isLoggedIn}
}