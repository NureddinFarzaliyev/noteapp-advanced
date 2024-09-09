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
        <div className="flex w-full px-7 py-2 gap-10">
            <div className="w-full flex flex-col gap-5">
                <div className="flex gap-2 items-center justify-between w-full mt-5">
                    <Search changeId={setFolderId} />
                    <CreateButtons render={setForceRender} folderId={folderId} />
                </div>

                {isLoading === true ? <p>Loading...</p> : 
                <FolderView 
                id={folderId} 
                changeId={setFolderId} 
                folderContent={{...folderContent, id: folderId}} 
                isLoading={isFolderLoading}
                setInfoData={setInfoData} />}
            </div>
            <div>
                <InfoView data={infoData} setSelfData={setInfoData} render={setForceRender} />
            </div>
        </div>
    )
}

export default Explorer
