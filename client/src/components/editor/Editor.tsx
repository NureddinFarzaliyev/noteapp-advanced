import { useParams } from "react-router-dom"
import { useGetNoteData } from "../../hooks/useGetNoteData.ts"
import { useEffect, useState } from "react"
import { useUpdateNote } from "../../hooks/useUpdateNote.ts"

function Editor() {
    const {id} = useParams()
    const {isLoading, noteData} = useGetNoteData(id)
    const {updateNoteContent, isSaving} = useUpdateNote()

    const [noteContent, setNoteContent] = useState<string|undefined>('')

    useEffect(() => {
        setNoteContent(noteData?.content)
    }, [noteData])

    console.log(noteContent)

    if(isLoading !== true){
        return (
            <div>
                <h1>{noteData?.name}</h1>
                <textarea name="" id="" value={noteContent} onChange={(e) => setNoteContent(e.target.value)}></textarea>
                <button disabled={isSaving} onClick={() => {updateNoteContent(id, noteContent)}}>SAVE</button>
            </div>
        )
    }else{
        return ( <p>Loading</p> ) 
    }

}

export default Editor
