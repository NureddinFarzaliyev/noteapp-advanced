import { useParams } from "react-router-dom"
import { useGetNoteData } from "../../hooks/useGetNoteData.ts"
import { useContext, useEffect, useState } from "react"
import Markdown from "./Markdown.tsx"
import NameComponent from "../explorer/NameComponent.tsx"
import DeleteComponent from "../explorer/DeleteComponent.tsx"
import EditView from "./EditView.tsx"
import NoteDetails from "./NoteDetails.tsx"
import { PreferencesContext } from "../../contexts/PreferencesContext.tsx"

function Editor() {
    const {id} = useParams()
    const {isLoading, noteData} = useGetNoteData(id)
    const [noteContent, setNoteContent] = useState<string>('')
    const [noteName, setNoteName] = useState<string | undefined>()
    const preferences = useContext(PreferencesContext)

    useEffect(() => {
        setNoteContent(typeof noteData?.content == 'string' ? noteData.content : '')
        setNoteName(noteData?.name)
    }, [noteData])

    if(isLoading !== true){
        return (
            <div className="min-h-dvh"
            style={{backgroundColor: preferences?.backgroundColor, color: preferences?.textColor}}>
                <h1>{noteName}</h1>
                <NameComponent type="note" nameSetter={setNoteName} id={id?id:''} />
                <DeleteComponent id={id?id:''} type="note" />
                <NoteDetails noteData={noteData} />
                <EditView noteContent={noteContent} setNoteContent={setNoteContent} noteData={noteData} id={id?id:''} />
                <Markdown noteContent={noteContent} />
            </div>
        )
    }else{
        return ( <p>Loading</p> ) 
    }
}

export default Editor