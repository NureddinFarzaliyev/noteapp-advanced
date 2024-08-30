import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast, successToast } from "../utils/toasts"

interface dataType {
    password?: string,
    newUsername?: string,
    newPassword?: string
}

type requestType = 'username' | 'password'

export const useChangeUserData = () => {
    const [isLoading, setIsLoading] = useState(false)

    const changeDataFn = async (data:dataType, request:requestType) => {
        setIsLoading(true)
        try {
            const result = await sendPostRequest(`/update/${request}`,data)
            if(result.success === true){
                successToast(`${result.message}. ${request === 'username' && 'Plese Refresh to see changes on page.'}`)
            }else if(result.error){
                errorToast(result.error)
            }
        } catch (error: any) {
            errorToast(error)
            console.log(error)            
        }
        setIsLoading(false)
    }
    return {isLoading, changeDataFn}
}