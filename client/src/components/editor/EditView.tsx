import { useContext, useEffect } from "react";
import { useUpdateNote } from "../../hooks/useUpdateNote";
import { NoteDataType } from "../../hooks/useGetNoteData";
import { PreferencesContext } from "../../contexts/PreferencesContext";

interface EditView {
    noteContent: string;
    noteData: NoteDataType | undefined;
    setNoteContent: React.Dispatch<React.SetStateAction<string>>;
    id: string;
}

function EditView({noteContent, noteData, setNoteContent, id} : EditView) {
    const {updateNoteContent, isSaving} = useUpdateNote()
    const preferences = useContext(PreferencesContext)

    const saveNote = () => {
        if(!isSaving || noteData?.content !== noteContent){
            updateNoteContent(id, noteContent); 
            if(noteData !== undefined) noteData.content = noteContent
        }
    }

    useEffect(() => {
        const handleKeyPress = (e:any) => {
            if(e.ctrlKey && e.key == 's') {
                e.preventDefault()
                saveNote()
            }
        }
        document.addEventListener('keydown', handleKeyPress)
        return () => {document.removeEventListener('keydown', handleKeyPress)}
    }, [noteData, noteContent, isSaving, id])

    return (
        <div className="relative">
        <textarea spellCheck={false}
            className="w-full min-h-[60vh] resize-y"
            style={{background: 'none', color: preferences?.textColor, fontSize: preferences?.textSize}}
            value={noteContent} 
            onChange={(e) => setNoteContent(e.target.value)}></textarea>
            <button className="absolute right-0 px-5 py-1 rounded hover:scale-105 disabled:hover:scale-100 transition-all disabled:opacity-10" 
            style={{backgroundColor: preferences?.accentColor}}
            disabled={isSaving || noteData?.content === noteContent} 
            onClick={() => {saveNote()}}>Save</button>
            {/* {noteData?.content !== noteContent && <p className="absolute w-44 text-right rounded shadow-lg py-1 top-10 right-0">You have unsaved changes!</p>} */}
        </div>
    )
}

export default EditView
