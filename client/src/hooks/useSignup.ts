import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { setLocalStorage } from "../utils/setLocalStorage"
import { errorToast } from "../utils/toasts"

interface dataType {
    username?: string,
    password?: string,
    confirm?: string
}

export const useSignup = (data:dataType) => {
    const [isLoading, setIsLoading] = useState(false)

    const signup = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if(data.password !== '' && data.confirm !== '' && data.username !== ''){
            if(data.password === data.confirm){
                setIsLoading(true)
                const result = await sendPostRequest('/auth/signup', {
                    username: data.username,
                    password: data.password
                })
                
                if(result.success === true){
                    // successToast(result.message)
                    setLocalStorage(result.id, result.token)
                    location.reload()
                }else{
                    errorToast(result.error)
                }
                
                setIsLoading(false)
                console.log(result)
            }else{
                errorToast("Password and Confirm Password must be same.")
            }
        }else{
            errorToast("Please fill in all the blanks.")
        }
    }

    return {signup, isLoading}
}