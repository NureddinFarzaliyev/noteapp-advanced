import express from 'express'
const router = express.Router()

import { updateFolderNameController, updateNoteNameController, updateNoteContentController } from '../controllers/update.controller.js'

router.post('/name/folder', updateFolderNameController)
router.post('/name/note', updateNoteNameController)
router.post('/note', updateNoteContentController)

export default router