import express from 'express'
const router = express.Router()

import { createFolderController, createNoteController } from '../controllers/create.controller.js'

router.post('/folder', createFolderController)
router.post('/note', createNoteController)

export default router