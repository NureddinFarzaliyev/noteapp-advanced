import { NoteDataType } from '../../hooks/useGetNoteData'

function NoteDetails({noteData} : {noteData: NoteDataType | undefined}) {
    return (
        <div>
            <p>Created: {noteData?.createdAt}</p>
        </div>
    )
}

export default NoteDetails
