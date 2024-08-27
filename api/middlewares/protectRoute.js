import jwt from 'jsonwebtoken'
import User from '../models/UserSchema.js'

const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({error: "Unaouthorized - no token"})
        const decodedToken = jwt.verify(token, process.env.JWT_KEY)
        if(!decodedToken) return res.status(401).json({error: "Unauthorized - invalid token"})

        const user = await User.findById(decodedToken.userId).select("-password")
        if(!user) return res.status(401).json({error: "User not found"})
        req.user = user

        next();
    } catch (error) {
        res.json({error: error.message})
    }

}

export default protectRoute