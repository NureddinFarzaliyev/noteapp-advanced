import { useChangeName } from "../../hooks/useChangeName";
import { useEffect } from "react";

interface NameProps {
    nameSetter?: React.Dispatch<any>;
    id: string; 
    type: 'note' | 'folder';
    forceRender?: React.Dispatch<React.SetStateAction<number>>;
}

function NameComponent({nameSetter, id, type, forceRender}: NameProps) {
    const {changeName, setNewName, isChangeNameLoading} = useChangeName()

    useEffect(() => {
        const handleKeyPress = (e:any) => {
            if(e.key == 'F2') window.alert('rename')
        }
        document.addEventListener('keydown', handleKeyPress)
        return () => {document.removeEventListener('keydown', handleKeyPress)}
    }, [id])

    return (
        <>
        <div>
            <input onChange={(e) => {setNewName(e.target.value); if(nameSetter !== undefined) nameSetter(e.target.value)}} placeholder="Change name" type="text" />
            <button disabled={isChangeNameLoading} 
            onClick={() => {changeName(type, id); if(forceRender !== undefined) forceRender(p => p + 1)}}>{isChangeNameLoading ? 'Loading...' : 'Change'}</button>
        </div>
        </>
    )
}

export default NameComponent
