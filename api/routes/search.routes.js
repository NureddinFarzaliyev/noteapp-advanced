import express from 'express'
const router = express.Router()

import { searchController } from '../controllers/search.controller.js'

router.post('/', searchController)

export default router