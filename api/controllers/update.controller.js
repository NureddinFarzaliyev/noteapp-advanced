import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'  

export const updateFolderNameController = async (req, res) => {
    await Folder.updateOne({_id: req.body.id}, {$set: {name: req.body.newName}})
    res.json({success: true, message: `Folder name changed to ${req.body.newName}`})
}

export const updateNoteNameController = async (req, res) => {
    await Note.updateOne({_id: req.body.id}, {$set: {name: req.body.newName}})
    res.json({success: true, message: `Note name changed to ${req.body.newName}`})
}

export const updateNoteContentController = async (req, res) => {
    await Note.updateOne({_id: req.body.id}, {$set: {content: req.body.content}})
    res.json({success: true, message: `Changes saved.`})
}