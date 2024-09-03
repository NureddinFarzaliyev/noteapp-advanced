import { useParams } from "react-router-dom"
import { useGetNoteData } from "../../hooks/useGetNoteData.ts"
import { useEffect, useState } from "react"
import { useUpdateNote } from "../../hooks/useUpdateNote.ts"
import { useChangeName } from "../../hooks/useChangeName.ts"

function Editor() {
    const {id} = useParams()
    const {isLoading, noteData} = useGetNoteData(id)
    const {updateNoteContent, isSaving} = useUpdateNote()
    const {isChangeNameLoading, changeName, setNewName} = useChangeName()
    const [noteContent, setNoteContent] = useState<string|undefined>('')
    const [noteName, setNoteName] = useState<string | undefined>()

    useEffect(() => {
        setNoteContent(noteData?.content)
        setNoteName(noteData?.name)
    }, [noteData])

    // TODO: SEPERATE COMPONENTS
    // TODO: DETAILED NOTE DATA

    if(isLoading !== true){
        return (
            <div>
                <h1>{noteName}</h1>
                <div>
                    <input type="text" placeholder="change name" onChange={(e) => {setNewName(e.target.value); setNoteName(e.target.value)}} />
                    <button disabled={isChangeNameLoading} onClick={() => {changeName('note', typeof id === 'string' ? id : '');}}>change</button>
                </div>
                <textarea name="" id="" value={noteContent} onChange={(e) => setNoteContent(e.target.value)}></textarea>
                <button disabled={isSaving} onClick={() => {updateNoteContent(id, noteContent)}}>SAVE</button>
            </div>
        )
    }else{
        return ( <p>Loading</p> ) 
    }

}

export default Editor
