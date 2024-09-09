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
            <button className="opacity-20 hover:opacity-100 transition-all w-full text-left" onClick={() => {setIsPopupOpen(p => !p)}}>Delete</button>
            <div className={isPopupOpen ? 'block' : 'hidden' }>
                <div onClick={() => {setIsPopupOpen(false)}} className="bg-[rgba(0,0,0,.75)] shadow-xl h-dvh w-dvw absolute top-0 left-0 flex items-center justify-center">
                    <div className={`bg-gray-900 px-3 py-5 rounded ${isPopupOpen && 'openPopup'}`}>
                        <div className="mb-5">{`Are you sure you want to delete this ${type}?`}</div>
                        <button className="text-left h-8 px-3 opacity-70 hover:opacity-100 transition-all bg-red-600 border-2 border-red-900 rounded"
                        disabled={isDeleting} 
                        onClick={() => {deleteItem(type, id); setIsPopupOpen(false); if(forceRender) forceRender(p => p + 1) }}>Delete</button>
                        <button className="h-8 ml-3 opacity-70 hover:opacity-100 transition-all" 
                        onClick={() => {setIsPopupOpen(false)}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteComponent