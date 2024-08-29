import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js"
import genereateLocalToken from "../utils/generateLocalToken.js"
import User from '../models/UserSchema.js'
import Folder from '../models/FolderSchema.js'


export const signupController = async (req, res) => {
    try{
        const existingUser = await User.findOne({username: req.body.username})
        if(existingUser) throw new Error("User already exists")

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const localToken = genereateLocalToken()
        
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            token: localToken,
        })
        const rootFolder = new Folder({
            name: "root",
            ownerId: newUser._id,
        })
        
        generateTokenAndSetCookie(newUser._id, res)

        await Promise.all([rootFolder.save(), newUser.save()])
        await User.updateOne({_id: newUser._id}, {$set: {rootId: newUser._id}})
        res.json({success: true, id: newUser._id, token: localToken, message: "Signed up successfully"})
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
        res.json({success: true, id: user._id, token: localToken, message: "Logged in successfully"})
    } catch (error) {
        res.json({error: error.message})
    }
} 

export const logoutController = async (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0})
        res.json({success: true, message: "Logged out sucessfully"})
    }catch(err){
        res.json({error: err.message})
    }
}

export const checkAuthController = async (req, res) => {
    try {
        const user = await User.findById({_id: req.body.id})
        if(!user) res.json({error: "user not found"})
        
        if(user.token == req.body.token){
            res.json({success: true, message: "Authenticated successfully"})
        }else{
            res.json({success: false, message: "Authentication failed"})
        }
    } catch (error) {
        console.log(error)
        res.json({error: error.message})
    }
}