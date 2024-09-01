interface FolderViewProps {
    id: string;
    changeId: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    folderContent: any;
}
interface FolderType {
    name: string;
    _id: string;
}
interface NoteType {
    name: string;
    _id: string;
}

function FolderView({changeId, isLoading, folderContent} : FolderViewProps) {
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
                <div><button disabled={folderContent.parentId === undefined} onClick={() => changeId(folderContent.parentId)}>Go back</button></div>
    
                <div>
                {folderContent.folders.map((folder:FolderType, index:number) => {
                    return <div className="m-2 border-2" onClick={() => changeId(folder._id)} key={index}>{folder.name}</div>
                })}
                </div>

                <div>
                {folderContent.notes.map((note:NoteType, index:number) => {
                    return <div className="m-2" key={999-index}>{note.name}</div>
                })}
                </div>
            </div>
        )
    }
}

export default FolderView