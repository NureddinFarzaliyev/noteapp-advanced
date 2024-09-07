import { useEffect, useState } from "react"
import FolderView from "./FolderView.tsx"
import { useFetchRootFolderId } from "../../hooks/useFetchRootFolderId.ts"
import { useFetchFolderContent } from "../../hooks/useFetchFolderContent.ts"
import CreateButtons from "./CreateButtons.tsx"
import InfoView from "./InfoView.tsx"
import { InfoDataType } from "./InfoView.tsx"
import Search from "./Search.tsx"

function Explorer() {
    const [folderId, setFolderId] = useState('')
    const {fetchRootId, isLoading} = useFetchRootFolderId()
    const {fetchChildren, folderContent, isFolderLoading} = useFetchFolderContent()
    const [forceRender, setForceRender] = useState(0)
    const [infoData, setInfoData] = useState<InfoDataType>()

    useEffect(() => {
        fetchRootId(setFolderId)
    }, [])

    useEffect(() => {
        fetchChildren(folderId)
    }, [folderId, forceRender])

    return (
        <div className="border-2">
            <p>Explorer</p>

            <CreateButtons render={setForceRender} folderId={folderId} />

            <Search />

            {isLoading === true ? <p>Loading...</p> : 
            <FolderView 
            id={folderId} 
            changeId={setFolderId} 
            folderContent={{...folderContent, id: folderId}} 
            isLoading={isFolderLoading}
            setInfoData={setInfoData} />}

            <InfoView data={infoData} setSelfData={setInfoData} render={setForceRender} />
        </div>
    )
}

export default Explorer
