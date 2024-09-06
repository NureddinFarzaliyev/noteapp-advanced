import { useEffect, useState } from "react";
import { useDeleteItem } from "../../hooks/useDeleteItem.ts"

interface DeleteProps {
    id: string;
    type: 'note' | 'folder';
    forceRender?: React.Dispatch<React.SetStateAction<number>>;
}

function DeleteComponent({id, type, forceRender} : DeleteProps) {
    const {deleteItem, isDeleting} = useDeleteItem(forceRender ? false : true)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    useEffect(() => {
        const handleKeyPress = (e:any) => {
            if(e.key == 'Delete') setIsPopupOpen(true)
        }
        document.addEventListener('keydown', handleKeyPress)
        return () => {document.removeEventListener('keydown', handleKeyPress)}
    }, [id])

    return (
        <div>  
            <button onClick={() => {setIsPopupOpen(p => !p)}}>DELETE</button>
            <div className={isPopupOpen ? 'block' : 'hidden' }>
                <div>sure deleting?</div>
                <button disabled={isDeleting} onClick={() => {deleteItem(type, id); if(forceRender) forceRender(p => p + 1) }}>DELETE</button>
                <button className="ml-10" onClick={() => {setIsPopupOpen(false)}}>NOOO</button>
            </div>
        </div>
    )
}

export default DeleteComponent