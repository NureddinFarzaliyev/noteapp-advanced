import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'

export const searchController = async (req, res) => {
    try {
        const folders = await Folder.find({ownerId: req.user._id, name: {$regex: req.body.query, $options: 'i'}})
        const notes = await Note.find({ownerId: req.user._id, name: {$regex: req.body.query, $options: 'i'}})
        
        res.json({success: true, folders: folders, notes: notes})
        
    } catch (error) {
        res.json({error: error.message})
    }
}