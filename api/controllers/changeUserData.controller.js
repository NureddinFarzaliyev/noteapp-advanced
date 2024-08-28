import bcrypt from 'bcryptjs'
import User from '../models/UserSchema.js'

export const changeUsernameController = async (req, res) => {
    try{
        const user = await User.findById(req.user._id)
        const isAuth = await bcrypt.compare(req.body.password, user.password)

        if(!user) throw new Error("Authentication error")
        if(isAuth){
            await User.updateOne({_id: req.user._id}, {$set: {username: req.body.newUsername}})
            res.json({success: true, message: `Username changed to ${req.body.newUsername}`})
        }else{
            throw new Error("Invalid password")
        }
    }catch(err){
        res.json({error: err.message})
    }
}

export const changePasswordController = async (req, res) => {
    try{
        const user = await User.findById(req.user._id)
        const isAuth = await bcrypt.compare(req.body.password, user.password)

        if(!user) throw new Error("Authentication error")
        if(isAuth){
            const hashedPassword = await bcrypt.hash(req.body.newPassword, 10)
            await User.updateOne({_id: req.user._id}, {$set: {password: hashedPassword}})
            res.json({success: true, message: `Password changed successfully.`})
        }else{
            throw new Error("Invalid password")
        }
    }catch(err){
        res.json({error: err.message})
    }
}