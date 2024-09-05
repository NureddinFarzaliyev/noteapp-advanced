
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

    return (
        <div>
            <textarea value={noteContent} onChange={(e) => setNoteContent(e.target.value)}></textarea>
            <button disabled={isSaving || noteData?.content === noteContent} onClick={() => {updateNoteContent(id, noteContent); if(noteData !== undefined) noteData.content = noteContent}}>SAVE</button>
            {noteData?.content !== noteContent && <p>You have unsaved changes! Leaving the page you'll lose your changes.</p>}
        </div>
    )
}

export default EditView
