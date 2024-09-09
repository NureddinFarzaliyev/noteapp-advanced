import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfoDataType } from "./InfoView";
import NameComponent from "./NameComponent";
import ExplorerButton from "./ExplorerButton";
import backIcon from '../../assets/back.svg'
import changeName from '../../assets/ChangeName.svg'
import ReactLoading from "react-loading";
import Item from "./Item";

interface FolderViewProps {
    id: string;
    changeId: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    folderContent: any;
    setInfoData: React.Dispatch<React.SetStateAction<InfoDataType | undefined>>;
}

function FolderView({changeId, isLoading, folderContent, setInfoData} : FolderViewProps) {
    const [folderName, setFolderName] = useState(folderContent.folderName) 
    const [isChangeFolderNameOpen, setIsChangeFolderNameOpen] = useState(false)
    const [isChosen, setIsChosen] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        setFolderName(folderContent.folderName)
    }, [folderContent])

    useEffect(() => {
        setIsChangeFolderNameOpen(false)
    }, [folderName])

    if(isLoading === true){
        return (
        <div className="flex items-center justify-center mt-32">
            <ReactLoading color="white" type="spin" height={50} width={50} />
        </div>) 
    }
    else{
        return (
            <div>
                {folderName !== undefined && (
                <div className="flex items-center gap-5">
                    <ExplorerButton>
                        <button className="h-8 w-full flex items-center justify-center" 
                        disabled={folderContent.parentId === undefined} 
                        onClick={() => changeId(folderContent.parentId)}>
                            <img src={backIcon} alt="Go Back" />
                        </button>
                    </ExplorerButton>
                    {isChangeFolderNameOpen === true ? (
                        <NameComponent type="folder" id={folderContent.id} nameSetter={setFolderName} />
                    ) : (
                        <div className="flex gap-2">
                            <div className="text-2xl">{`. . . / ${folderName}`}</div>
                            <button onClick={() => {setIsChangeFolderNameOpen(true)}}><img src={changeName} alt="Change Name" className="h-5 opacity-20 hover:opacity-100 transition-all" /></button>
                        </div>
                    )}
                </div>
                )}

                <div className="mt-10">
                {folderContent.folders.map((folder:InfoDataType, index:number) => {
                    return <button
                    onClick={() => {setInfoData({...folder, type: 'folder'}); setIsChosen(folder._id)}} 
                    onDoubleClick={() => changeId(folder._id)} 
                    key={index}><Item isChosen={isChosen === folder._id} name={folder.name} type="folder" /></button>
                })}
                {folderContent.notes.map((note:InfoDataType, index:number) => {
                    return <button
                    onClick={() => {setInfoData({...note, type: 'note'}); setIsChosen(note._id)}} 
                    onDoubleClick={() => {navigate(`/edit/${note._id}`)}} 
                    key={999-index}><Item isChosen={isChosen === note._id} name={note.name} type="note" /></button>
                })}
                </div>
            </div>
        )
    }
}

export default FolderView