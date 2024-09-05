import { useChangeName } from "../../hooks/useChangeName";

interface NameProps {
    nameSetter?: React.Dispatch<any>;
    id: string; 
    type: 'note' | 'folder';
    forceRender?: React.Dispatch<React.SetStateAction<number>>;
}

function NameComponent({nameSetter, id, type, forceRender}: NameProps) {
    const {changeName, setNewName, isChangeNameLoading} = useChangeName()

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
