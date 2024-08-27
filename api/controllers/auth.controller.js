import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js"
import genereateLocalToken from "../utils/generateLocalToken.js"
import User from '../models/UserSchema.js'


export const signupController = async (req, res) => {
    try{
        const existingUser = await User.findOne({username: req.body.username})
        if(existingUser) throw new Error("User already exists")

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const localToken = genereateLocalToken()
        
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            token: localToken
        })
        
        generateTokenAndSetCookie(newUser._id, res)
        await newUser.save()
        res.json({success: true, id: newUser._id, token: localToken})
    }
    catch(err){
        res.json({error: err.message})
    }
} 

export const loginController = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) throw new Error('Invalid credentials')

        const isCorrectLogin = await bcrypt.compare(req.body.password, user.password)
        if(isCorrectLogin !== true) throw new Error('Invalid credentials')

        generateTokenAndSetCookie(user._id, res)
        const localToken = genereateLocalToken()

        await User.updateOne({username: req.body.username}, { $set: { token: localToken } } )
        res.json({success: true, id: user._id, token: localToken})
    } catch (error) {
        res.json({error: error.message})
    }
} 

export const logoutController = async (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0})
        await User.updateOne({_id: req.body.id}, {$set : {token: ""}})
        res.json({success: true})
    }catch(err){
        res.json({error: err.message})
    }
}