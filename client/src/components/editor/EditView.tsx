import { useEffect } from "react";
import { useUpdateNote } from "../../hooks/useUpdateNote";
import { NoteDataType } from "../../hooks/useGetNoteData";

interface EditView {
    noteContent: string;
    noteData: NoteDataType | undefined;
    setNoteContent: React.Dispatch<React.SetStateAction<string>>;
    id: string;
}

function EditView({noteContent, noteData, setNoteContent, id} : EditView) {
    const {updateNoteContent, isSaving} = useUpdateNote()

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
        <div>
            <textarea value={noteContent} onChange={(e) => setNoteContent(e.target.value)}></textarea>
            <button disabled={isSaving || noteData?.content === noteContent} 
            onClick={() => {saveNote()}}>SAVE</button>
            {noteData?.content !== noteContent && <p>You have unsaved changes! Leaving the page you'll lose your changes.</p>}
        </div>
    )
}

export default EditView
