import express from 'express'
const router = express.Router()

import { updateFolderNameController, updateNoteNameController, updateNoteContentController } from '../controllers/update.controller.js'
import { changePasswordController, changeUsernameController } from '../controllers/changeUserData.controller.js'
import { changeUserPreferencesController } from '../controllers/changeUserPreferences.controller.js'

router.post('/name/folder', updateFolderNameController)
router.post('/name/note', updateNoteNameController)
router.post('/note', updateNoteContentController)

router.post('/username', changeUsernameController)
router.post('/password', changePasswordController)

router.post('/preferences', changeUserPreferencesController)

export default router