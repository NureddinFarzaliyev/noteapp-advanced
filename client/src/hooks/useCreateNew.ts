import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast } from "../utils/toasts"

export const useCreateNew = (forceRenderState:any) => {
    const [isLoading, setIsLoading] = useState(false)

    const createNewFolder = async (name:string, parentId:string) => {
        setIsLoading(true)
        try{
            const result = await sendPostRequest('/create/folder', {parentId: parentId, name: name})
            if(result.success){
                await forceRenderState((p:number) => p+1)
            }else if(result.error){
                throw new Error(result.error)
            }else{
                throw new Error("Unexpected error")
            }
        }catch(err: any){
            errorToast(err)
        }
        setIsLoading(false)
    }

    const createNewNote = async (name:string, parentId:string) => {
        setIsLoading(true)
        try{
            const result = await sendPostRequest('/create/note', {parentId: parentId, name: name, content: ' '})
            if(result.success){
                await forceRenderState((p:number) => p+1)
            }else if(result.error){
                throw new Error(result.error)
            }else{
                throw new Error("Unexpected error")
            }
        }catch(err: any){
            console.log(err)
        }
        setIsLoading(false)
    }

    return {createNewFolder, createNewNote, isLoading}
}