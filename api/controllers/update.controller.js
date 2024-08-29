import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'  


export const updateFolderNameController = async (req, res) => {
    try{
        await Folder.updateOne({_id: req.body.id}, {$set: {name: req.body.newName}})
        res.json({success: true, message: `Folder name changed to ${req.body.newName}`})
    }catch(error){
        res.json({error: error.message})
    }
}

export const updateNoteNameController = async (req, res) => {
    try{
        await Note.updateOne({_id: req.body.id}, {$set: {name: req.body.newName}})
        res.json({success: true, message: `Note name changed to ${req.body.newName}`})
    }catch(error){
        res.json({error: error.message})
    }
}

export const updateNoteContentController = async (req, res) => {
    try{
        await Note.updateOne({_id: req.body.id}, {$set: {content: req.body.content}})
        res.json({success: true, message: `Changes saved.`})
    }catch(error){
        res.json({error: error.message})
    }
}