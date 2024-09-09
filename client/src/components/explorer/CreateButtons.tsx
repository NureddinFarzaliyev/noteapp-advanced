import React, { useContext, useState } from 'react'
import { useCreateNew } from '../../hooks/useCreateNew'
import addFolderIcon from '../../assets/folderIcon.svg'
import addNoteIcon from '../../assets/noteIcon.svg'
import { PreferencesContext } from '../../contexts/PreferencesContext'
import ExplorerPopover from './ExplorerPopover'

interface ButtonsProps {
    render: React.Dispatch<React.SetStateAction<number>>;
    folderId: string;
}

function CreateButtons({render, folderId} : ButtonsProps) {
    const {createNewFolder, createNewNote, isLoading} = useCreateNew(render)
    const preferences = useContext(PreferencesContext)
    const [newFolderName, setNewFolderName] = useState('')
    const [newNoteName, setNewNoteName] = useState('')

    return (
        <div className='flex gap-2 '>
            <ExplorerPopover icon={addFolderIcon}>
                <p className='mb-2' style={{color: preferences?.textColor}}>Create New Folder</p>
                <input placeholder='New Folder' className='px-2 rounded' type="text" value={newFolderName} onChange={(e) => {setNewFolderName(e.target.value)}} />
                <button style={{backgroundColor: preferences?.accentColor, color: preferences?.textColor}}
                className="mt-2 rounded shadow-lg opacity-70 hover:opacity-100 transition-all"
                disabled={isLoading} 
                onClick={() => {createNewFolder(newFolderName !== '' ? newFolderName : 'New Folder', folderId); setNewFolderName('')}}> 
                Create new folder
                </button>
            </ExplorerPopover>

            <ExplorerPopover icon={addNoteIcon}>
                <p className='mb-2' style={{color: preferences?.textColor}}>Create New Note</p>
                <input placeholder='New Note' className='px-2 rounded' type="text" value={newNoteName} onChange={(e) => {setNewNoteName(e.target.value)}} />
                <button style={{backgroundColor: preferences?.accentColor, color: preferences?.textColor}}
                className="mt-2 rounded shadow-lg opacity-70 hover:opacity-100 transition-all"
                disabled={isLoading}
                onClick={() => {createNewNote(newNoteName !== '' ? newNoteName : 'New Note', folderId); setNewNoteName('')}}>
                    Create new file
                </button>
            </ExplorerPopover>
        </div>
    )
}

export default CreateButtons