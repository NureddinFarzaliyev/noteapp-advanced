import { useDeleteItem } from "../../hooks/useDeleteItem.ts"

function DeleteComponent({id, type} : {id: string; type: 'note' | 'folder'}) {

    const {deleteItem, isDeleting} = useDeleteItem()

    return (
        <>
            <button disabled={isDeleting} onClick={() => {deleteItem(type, id)}}>DELETE</button>
        </>
    )
}

export default DeleteComponent
