import React from 'react'
import { useCreateNew } from '../../hooks/useCreateNew'

interface ButtonsProps {
    render: React.Dispatch<React.SetStateAction<number>>;
    folderId: string;
}

function CreateButtons({render, folderId} : ButtonsProps) {
    const {createNewFolder, createNewNote, isLoading} = useCreateNew(render)

    return (
        <div>
            <button
            disabled={isLoading} 
            onClick={() => {createNewFolder(`folder name ${Math.floor(Math.random() * 999)}`, folderId)}} className="m-2 p-2"> 
            Create new folder
            </button>
            <button 
            disabled={isLoading}
            onClick={() => {createNewNote(`file name ${Math.floor(Math.random() * 999)}`, folderId)}} className="m-2 p-2">
                Create new file
            </button>
        </div>
    )
}

export default CreateButtons