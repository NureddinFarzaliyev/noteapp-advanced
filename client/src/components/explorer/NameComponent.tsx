import { PreferencesContext } from "../../contexts/PreferencesContext";
import { useChangeName } from "../../hooks/useChangeName";
import { useContext } from "react";
import ExplorerButton from "./ExplorerButton";
import CheckMark from '../../assets/ChangeName.svg'
import ReactLoading from "react-loading";

interface NameProps {
    nameSetter?: React.Dispatch<any>;
    id: string; 
    type: 'note' | 'folder';
    forceRender?: React.Dispatch<React.SetStateAction<number>>;
}

function NameComponent({nameSetter, id, type, forceRender}: NameProps) {
    const {changeName, setNewName, isChangeNameLoading, newName} = useChangeName()
    const preferences = useContext(PreferencesContext)

    // useEffect(() => {
    //     const handleKeyPress = (e:any) => {
    //         if(e.key == 'F2') window.alert('rename')
    //     }
    //     document.addEventListener('keydown', handleKeyPress)
    //     return () => {document.removeEventListener('keydown', handleKeyPress)}
    // }, [id])

    const changeNameHandler = () => {
        changeName(type, id) 
        setNewName('')
        if(forceRender !== undefined) forceRender(p => p + 1); 
        if(nameSetter !== undefined) nameSetter(newName)
    }

    return (
        <>
        <div className="flex">
            <input 
            // onChange={(e) => {setNewName(e.target.value); if(nameSetter !== undefined) nameSetter(e.target.value)}} 
            onChange={(e) => {setNewName(e.target.value)}} 
            value={newName}
            placeholder="Enter new name..." type="text"
            style={{color: preferences?.textColor}}
            className="py-1 h-8 rounded bg-transparent md:min-w-20 opacity-20 hover:opacity-100 transition-all focus:opacity-100" />
            <ExplorerButton>
            <button disabled={isChangeNameLoading} 
            onClick={() => {changeNameHandler()}}>{isChangeNameLoading ? <ReactLoading color="black" type="spin" height={16} width={16} /> : <img src={CheckMark} alt="Done"/>}</button>
            </ExplorerButton>
        </div>
        </>
    )
}

export default NameComponent