import express from 'express'
const router = express.Router()

import { deleteFolderController, deleteNoteController } from '../controllers/delete.controller.js'

router.post('/folder', deleteFolderController)
router.post('/note', deleteNoteController)

export default router