import Folder from '../models/FolderSchema.js'
import Note from '../models/NoteSchema.js'

export const createFolderController = async (req, res) => {
    const newFolder = new Folder({
        name: req.body.name,
        ownerId: req.body.ownerId,
        parentId: req.body.parentId,
    })

    await newFolder.save()
    res.send({success: "true", folderId: newFolder._id})
}


export const createNoteController = async (req, res) => {
    const newNote = new Note({
        name: req.body.name,
        ownerId: req.body.ownerId,
        parentId: req.body.parentId,
        content: req.body.content
    })

    await newNote.save()
    res.send({success: true, noteId: newNote._id})
}