import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast } from "../utils/toasts"

interface ContentType {
    folders: [];
    notes: [];
    parentId: string;
}

export const useFetchFolderContent = () => {
    const [folderContent, setFolderContent] = useState<ContentType>({folders: [], notes: [], parentId: ''})
    const [isFolderLoading, setIsLoading] = useState(false)

    const fetchChildren = async (id:string) => {
        setIsLoading(true)
        try {
            const response = await sendPostRequest('/get/children', {id: id})
    
            if(response.success){
                setFolderContent({notes: response.notes, folders: response.folders, parentId: response.parentId })
            }else{
                console.log(response.error)
            }
        } catch (error: any) {
            errorToast(error)
            console.log(error)            
        }
        setIsLoading(false)
    }

    return {fetchChildren, folderContent, isFolderLoading}
}