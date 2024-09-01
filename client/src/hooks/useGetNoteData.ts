import { useEffect, useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"

interface NoteDataType {
    name: string;
    content: string;
}

export const useGetNoteData = (id:string|undefined) => {
    
    const [noteData, setNoteData] = useState<NoteDataType>()
    const [isLoading, setIsLoading] = useState(false)

    const getNoteData = async () => {
        setIsLoading(true)
        try {
            const data = await sendPostRequest('/get/note', {id: id})

            if(data.success === true){
                console.log(data.note)
                setNoteData(data.note)
            }else if(data.error){
                setIsLoading(false)
                throw new Error(data.error)
            }else{
                setIsLoading(false)
                throw new Error('Unexpected error')
            }
        } catch (error) {
            console.log(error)            
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getNoteData()
    }, [id])

    return {isLoading, noteData}

}