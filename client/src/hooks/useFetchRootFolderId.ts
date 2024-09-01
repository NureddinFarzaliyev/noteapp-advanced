import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast } from "../utils/toasts"

export const useFetchRootFolderId = () => {

    const [isLoading, setIsLoading] = useState(false)

    const fetchRootId = async (idsetter:React.Dispatch<React.SetStateAction<string>>) => {
        setIsLoading(true)
        try {
            const result = await sendPostRequest('/auth/userdata', {id: localStorage.getItem('noteapp-id')})
    
            if(result.success){
                idsetter(result.user.rootId)
            }else if(result.error){
                throw new Error(result.error)
            }else{
                throw new Error('Unexpected error occured')
            }
        } catch (error: any) {
            errorToast(error)
            console.log(error)
        }
        setIsLoading(false)
    }

    return {fetchRootId, isLoading}
}