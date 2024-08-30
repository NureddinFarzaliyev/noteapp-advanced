import express from 'express'
const router = express.Router()

import { signupController, loginController, logoutController, checkAuthController, getUserData } from '../controllers/auth.controller.js'

router.post("/signup", signupController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/check", checkAuthController)
router.post("/userdata", getUserData)

export default router