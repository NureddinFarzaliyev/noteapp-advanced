import { Link, useParams } from "react-router-dom"
import { useGetNoteData } from "../../hooks/useGetNoteData.ts"
import { useContext, useEffect, useState } from "react"
import Markdown from "./Markdown.tsx"
import NameComponent from "../explorer/NameComponent.tsx"
import DeleteComponent from "../explorer/DeleteComponent.tsx"
import EditView from "./EditView.tsx"
// import NoteDetails from "./NoteDetails.tsx"
import { PreferencesContext } from "../../contexts/PreferencesContext.tsx"
import renameIcon from '../../assets/ChangeName.svg'

function Editor() {
    const {id} = useParams()
    const {isLoading, noteData} = useGetNoteData(id)
    const [noteContent, setNoteContent] = useState<string>('')
    const [noteName, setNoteName] = useState<string | undefined>()
    const [isRenameOpen, setIsRenameOpen] = useState(false)
    const [mode, setMode] = useState<'R'|'W'>('R')
    const preferences = useContext(PreferencesContext)

    useEffect(() => {
        setNoteContent(typeof noteData?.content == 'string' ? noteData.content : '')
        setNoteName(noteData?.name)
    }, [noteData])

    useEffect(() => {
        setIsRenameOpen(false)
    }, [noteName])

    if(isLoading !== true){
        return (
            <div className="min-h-dvh py-12 px-2 sm:px-24 md:px-72 flex flex-col gap-2"
            style={{backgroundColor: preferences?.backgroundColor, color: preferences?.textColor}}>
                <div className="flex items-end gap-2">
                    {isRenameOpen ? (
                        <NameComponent type="note" nameSetter={setNoteName} id={id?id:''} />
                    ) : (
                        <>
                        <h1 className="text-5xl">{noteName}</h1>
                        <button className="opacity-40 hover:opacity-100 transition-all"
                        onClick={() => {setIsRenameOpen(true)}}>
                            <img className="mb-1" src={renameIcon} />
                        </button>
                        </>
                    )}
                </div>
                <div className="z-[99999] mt-2 flex gap-3">
                    <Link to={'/'} className="opacity-20 hover:opacity-100 transition-all">Go Back</Link>
                    <DeleteComponent id={id?id:''} type="note" />
                    {/* <NoteDetails noteData={noteData} /> */}
                </div>
                <hr className="mt-3 mb-3 opacity-30" />
                <div className="flex overflow-hidden w-full cursor-pointer justify-end items-end">
                    <button onClick={() => {setMode("R")}} className={`py-[0.1rem] px-3 transition-colors rounded`} style={{backgroundColor: mode === 'R' ? preferences?.accentColor : ''}}>R</button>
                    <button onClick={() => {setMode("W")}} className={`py-[0.1rem] px-3 transition-colors rounded`} style={{backgroundColor: mode === 'W' ? preferences?.accentColor : ''}}>W</button>
                </div>
                {mode === 'R' ? (
                    <Markdown noteContent={noteContent} />
                ) : (
                    <EditView noteContent={noteContent} setNoteContent={setNoteContent} noteData={noteData} id={id?id:''} />
                )}
            </div>
        )
    }else{
        return ( <p>Loading</p> ) 
    }
}

export default Editor