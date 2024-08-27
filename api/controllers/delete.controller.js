import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'

export const deleteFolderController = async (req, res) => {
    try {
        await Folder.deleteOne({_id: req.body.id})
        res.json({success: true, message: "Folder deleted successfully"})
    } catch (error) {
        res.json({error: error.message})
    }
}

export const deleteNoteController = async (req, res) => {
    try {
        await Note.deleteOne({_id: req.body.id})
        res.json({success: true, message: "Note deleted successfully"})
    } catch (error) {
        res.json({error: error.message})
    }
}