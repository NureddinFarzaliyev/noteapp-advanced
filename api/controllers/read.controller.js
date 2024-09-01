import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'

export const getChildren = async (req, res) => {
    try{
        const parentFolder = await Folder.findOne({_id: req.body.id})
        const childrenFolders = await Folder.find({parentId: req.body.id, ownerId: req.user._id})
        const childrenNotes = await Note.find({parentId: req.body.id, ownerId: req.user._id}).select('-content')
    
        res.json({success: true, notes: childrenNotes, folders: childrenFolders, parentId: parentFolder?.parentId})
    }catch(err){
        res.json({error: err.message})
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.findOne({_id: req.body.id, ownerId: req.user._id})
        res.json({success: true, note: note})
    } catch (error) {
        res.json({error: err.message})
    }
}