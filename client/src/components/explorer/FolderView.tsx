import { useEffect, useState } from "react";
import { useChangeName } from "../../hooks/useChangeName";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { useNavigate } from "react-router-dom";
import { InfoDataType } from "./InfoView";

interface FolderViewProps {
    id: string;
    changeId: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    folderContent: any;
    setInfoData: React.Dispatch<React.SetStateAction<InfoDataType | undefined>>;
}
// interface FolderType {
//     name: string;
//     _id: string;
// }
// interface NoteType {
//     name: string;
//     _id: string;
// }

// TODO: CREATE SEPERATE COMPONENTS

function FolderView({changeId, isLoading, folderContent, setInfoData} : FolderViewProps) {
    const {changeName, setNewName, isChangeNameLoading} = useChangeName()
    const {deleteItem, isDeleting} = useDeleteItem()
    const [folderName, setFolderName] = useState(folderContent.folderName) 
    const navigate = useNavigate()

    useEffect(() => {
        setFolderName(folderContent.folderName)
    }, [folderContent])

    if(isLoading === true){
        return (
        <div>
            <p>Loading content...</p>
        </div>) 
    }
    else{
        return (
            <div>
                {/* <p className="underline">{id}</p> */}
                <button disabled={folderContent.parentId === undefined} onClick={() => changeId(folderContent.parentId)}>Go back</button>
                <div>{folderName}</div>

                {folderName !== undefined ? ( 
                <>
                <div>
                    <input onChange={(e) => {setNewName(e.target.value); setFolderName(e.target.value)}} placeholder="Change folder name" type="text" />
                    <button disabled={isChangeNameLoading} onClick={() => {changeName('folder', folderContent.id)}}>{isChangeNameLoading ? 'Loading...' : 'Change'}</button>
                </div>
                <div>
                    <button disabled={isDeleting} onClick={() => {deleteItem('folder', folderContent.id)}}>DELETE FOLDER</button>
                </div>
                </>
                 ) : null}

                <div>
                {folderContent.folders.map((folder:InfoDataType, index:number) => {
                    return <button className="m-2 border-2" onClick={() => {setInfoData({...folder, type: 'folder'})}} onDoubleClick={() => changeId(folder._id)} key={index}>{folder.name}</button>
                })}
                </div>

                <div>
                {folderContent.notes.map((note:InfoDataType, index:number) => {
                    return <button onClick={() => {setInfoData({...note, type: 'note'})}} onDoubleClick={() => {navigate(`/edit/${note._id}`)}} key={999-index} className="m-2">{note.name}</button>
                })}
                </div>
            </div>
        )
    }
}

export default FolderView