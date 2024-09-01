import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast, successToast } from "../utils/toasts"

export const useUpdateNote = () => {

    const [isSaving, setIsLoading] = useState(false)

    const updateNoteContent = async (id:string|undefined, content:string|undefined) => {
        setIsLoading(true)
        try {
            const response = await sendPostRequest('/update/note', {id, content})
            console.log(response)
            if(response.success){
                setIsLoading(false)
                successToast(response.message)
            }else if(response.error){
                setIsLoading(false)
                throw new Error(response.error)
            }
        } catch (error:any) {
            errorToast(error)
        }
        setIsLoading(false)
    }

    return {updateNoteContent, isSaving}
}