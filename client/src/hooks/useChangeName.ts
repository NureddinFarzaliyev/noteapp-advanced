import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast, successToast } from "../utils/toasts"

type typeType = 'note' | 'folder'

export const useChangeName = () => {

    const [isChangeNameLoading, setIsLoading] = useState(false)
    const [newName, setNewName] = useState('')

    const changeName  = async (type:typeType, id:string) => {
        setIsLoading(true)
        try {
            const result = await sendPostRequest(`/update/name/${type}`, {id, newName})
            
            if(result.success){
                successToast(result.message)
                setNewName('')
            }else  if(result.error){
                throw new Error(result.error);
            }else{
                throw new Error("Internal Server Error");
            }
        } catch (error: any) {
            console.log(error)
            errorToast(error)            
        }
        setIsLoading(false)
    }

    return {changeName, isChangeNameLoading, setNewName}
}