import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'

export const createFolderController = async (req, res) => {
    try {
        const newFolder = new Folder({
            name: req.body.name,
            ownerId: req.user._id,
            parentId: req.body.parentId,
        })
    
        await newFolder.save()
        res.json({success: "true", folderId: newFolder._id})
    } catch (error) {
        res.json({error: error.message})
    }
}


export const createNoteController = async (req, res) => {
    try {
        const newNote = new Note({
            name: req.body.name,
            ownerId: req.user._id,
            parentId: req.body.parentId,
            content: req.body.content
        })
    
        await newNote.save()
        res.json({success: true, noteId: newNote._id})
    } catch (error) {
        res.json({error: error.message})
    }
}