import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'

export const getChildren = async (req, res) => {
    try{
        const childrenFolders = await Folder.find({parentId: req.body.id, ownerId: req.user._id})
        const childrenNotes = await Note.find({parentId: req.body.id, ownerId: req.user._id}).select('-content')
    
        res.json({success: true, notes: childrenNotes, folders: childrenFolders})
    }catch(err){
        res.json({error: err.message})
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.find({_id: req.body.id, ownerId: req.user._id})
        res.json(note)
    } catch (error) {
        res.json({error: err.message})
    }
}