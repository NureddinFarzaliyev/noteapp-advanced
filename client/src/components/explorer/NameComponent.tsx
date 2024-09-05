import { useChangeName } from "../../hooks/useChangeName";

interface NameProps {
    nameSetter: React.Dispatch<any>;
    id: string;
    type: 'note' | 'folder';
}

function NameComponent({nameSetter, id, type}: NameProps) {
    const {changeName, setNewName, isChangeNameLoading} = useChangeName()

    return (
        <>
        <div>
            <input onChange={(e) => {setNewName(e.target.value); nameSetter(e.target.value)}} placeholder="Change name" type="text" />
            <button disabled={isChangeNameLoading} onClick={() => {changeName(type, id)}}>{isChangeNameLoading ? 'Loading...' : 'Change'}</button>
        </div>
        </>
    )
}

export default NameComponent
