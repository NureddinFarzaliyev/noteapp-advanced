import { useDeleteItem } from "../../hooks/useDeleteItem.ts"

function DeleteComponent({id, type, forceRender} : {id: string; type: 'note' | 'folder'; forceRender?: React.Dispatch<React.SetStateAction<number>>}) {

    const {deleteItem, isDeleting} = useDeleteItem(forceRender ? false : true)

    return (
        <div>
            <button disabled={isDeleting} onClick={() => {deleteItem(type, id); if(forceRender) forceRender(p => p + 1) }}>DELETE</button>
        </div>
    )
}

export default DeleteComponent
