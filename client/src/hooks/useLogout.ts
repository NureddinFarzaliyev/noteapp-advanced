import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast } from "../utils/toasts"
import { deleteLocalStorage } from "../utils/setLocalStorage"


export const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false)

    const logout = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        try{
            setIsLoading(true)
            const result = await sendPostRequest('/auth/logout', {})
            if(result.error){
                errorToast(result.error)
            }else if(result.success === true){
                // successToast(result.message)
                deleteLocalStorage();
                location.reload()
            }
        }catch(error: any){
            errorToast(error.message)
        }

        setIsLoading(false)
    }
    return {logout, isLoading}
}