import { NoteDataType } from '../../hooks/useGetNoteData'

function NoteDetails({noteData} : {noteData: NoteDataType | undefined}) {
    return (
        <div>
            <p>Created: {noteData?.createdAt}</p>
            <p>Last Changed: {noteData?.updatedAt}</p>
        </div>
    )
}

export default NoteDetails
