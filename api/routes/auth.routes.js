import express from 'express'
const router = express.Router()

import { signupController, loginController, logoutController, checkAuthController } from '../controllers/auth.controller.js'

router.post("/signup", signupController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/check", checkAuthController)

export default router