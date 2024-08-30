import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast } from "../utils/toasts"
import { setLocalStorage } from "../utils/setLocalStorage"


interface loginDataType {
    username?: string,
    password?: string
}

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const login = async (loginData:loginDataType, e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsLoading(true)
        e.preventDefault()
        if(loginData.password === '' || loginData.username === ''){
            errorToast("Please fill in all the blanks.")
        }else{
            try {
                const result = await sendPostRequest('/auth/login', loginData)
                
                if(result.success === true){
                    // successToast(result.message)
                    setLocalStorage(result.id, result.token)
                    location.reload()
                }else if(result.success === false){
                    errorToast(result.message)
                }else if(result.error){
                    errorToast(result.error)
                } 
            } catch (error: any) {
                console.log(error)
                errorToast(error.message)
            }
        }
        setIsLoading(false)
    }
    return {login, isLoading}
}