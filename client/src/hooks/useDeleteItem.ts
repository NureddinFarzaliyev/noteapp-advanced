import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast, successToast } from "../utils/toasts"

type itemType = 'folder' | 'note' 

export const useDeleteItem = () => {

    const [isDeleting, setIsDeleting] = useState(false)

    const deleteItem = async (type:itemType, id:string) => {
        try {
            setIsDeleting(true)
            if(id !== ''){
                const result = await sendPostRequest(`/delete/${type}`, {id: id})
                if(result.success){
                    successToast(result.message)
                    location.reload()
                }else if(result.error){
                    throw new Error(result.error);
                }else{
                    throw new Error("Unexpected Error");
                }
            }
        } catch (error: any) {
            errorToast(error) 
            setIsDeleting(false)           
        }
        setIsDeleting(false)
    }

    return {deleteItem, isDeleting}
}