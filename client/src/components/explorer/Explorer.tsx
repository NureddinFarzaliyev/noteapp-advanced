import { useEffect, useState } from "react"
import FolderView from "./FolderView"
import { useFetchRootFolderId } from "../../hooks/useFetchRootFolderId.ts"
import { useFetchFolderContent } from "../../hooks/useFetchFolderContent.ts"
import CreateButtons from "./CreateButtons.tsx"

function Explorer() {
    const [folderId, setFolderId] = useState('')
    const {fetchRootId, isLoading} = useFetchRootFolderId()
    const {fetchChildren, folderContent, isFolderLoading} = useFetchFolderContent()
    const [forceRender, setForceRender] = useState(0)

    useEffect(() => {
        fetchRootId(setFolderId)
    }, [])

    useEffect(() => {
        fetchChildren(folderId)
    }, [folderId, forceRender])

    return (
        <div>
            <p>Explorer</p>

            <CreateButtons render={setForceRender} folderId={folderId} />
            {isLoading === true ? <p>Loading...</p> : 
            <FolderView id={folderId} 
            changeId={setFolderId} 
            folderContent={folderContent} 
            isLoading={isFolderLoading} />}
        </div>
    )
}

export default Explorer
