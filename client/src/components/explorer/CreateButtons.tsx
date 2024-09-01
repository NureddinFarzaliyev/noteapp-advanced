import React, { useState } from 'react'
import { useCreateNew } from '../../hooks/useCreateNew'

interface ButtonsProps {
    render: React.Dispatch<React.SetStateAction<number>>;
    folderId: string;
}

function CreateButtons({render, folderId} : ButtonsProps) {
    const {createNewFolder, createNewNote, isLoading} = useCreateNew(render)

    const [newFolderName, setNewFolderName] = useState('')
    const [newNoteName, setNewNoteName] = useState('')

    return (
        <div>
            <input type="text" value={newFolderName} onChange={(e) => {setNewFolderName(e.target.value)}} />
            <button
            disabled={isLoading} 
            onClick={() => {createNewFolder(newFolderName !== '' ? newFolderName : 'New Folder', folderId); setNewFolderName('')}} className="m-2 p-2"> 
            Create new folder
            </button>
            <input type="text" value={newNoteName} onChange={(e) => {setNewNoteName(e.target.value)}} />
            <button 
            disabled={isLoading}
            onClick={() => {createNewNote(newNoteName !== '' ? newNoteName : 'New Note', folderId); setNewNoteName('')}} className="m-2 p-2">
                Create new file
            </button>
        </div>
    )
}

export default CreateButtons