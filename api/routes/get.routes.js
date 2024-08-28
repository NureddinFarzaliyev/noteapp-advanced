import express from 'express'
const router = express.Router()

import { getChildren, getNote } from '../controllers/read.controller.js'

router.post('/children', getChildren)
router.post('/note', getNote)

export default router