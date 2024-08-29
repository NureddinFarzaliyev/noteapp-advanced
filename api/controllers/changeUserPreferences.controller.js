import User from '../models/UserSchema.js'

export const changeUserPreferencesController = async (req, res) => {
    try{
        await User.updateOne({_id: req.user.id}, {$set: {preferences: req.body.preferences}})
        res.json({success: true, message: "Preferences applied successfully."})
    }catch(err){
        res.json({error: err.message})
    }
}