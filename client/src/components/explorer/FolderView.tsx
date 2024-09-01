import { Link } from "react-router-dom";

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
                    return <button className="m-2 border-2" onClick={() => changeId(folder._id)} key={index}>{folder.name}</button>
                })}
                </div>

                <div>
                {folderContent.notes.map((note:NoteType, index:number) => {
                    return <Link target="_blank" key={999-index} to={`/edit/${note._id}`}><button className="m-2">{note.name}</button></Link>
                })}
                </div>
            </div>
        )
    }
}

export default FolderView