import { useEffect, useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { useNavigate } from "react-router-dom";

interface NoteDataType {
    name: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export const useGetNoteData = (id:string|undefined) => {
    const navigate = useNavigate()
    const [noteData, setNoteData] = useState<NoteDataType>()
    const [isLoading, setIsLoading] = useState(false)

    const getNoteData = async () => {
        setIsLoading(true)
        try {
            const data = await sendPostRequest('/get/note', {id: id})

            if(data.success === true){
                if(data.note === null) navigate('/')
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
            navigate('/')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getNoteData()
    }, [id])

    return {isLoading, noteData}

}