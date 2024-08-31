import mongoose from "mongoose";

const preferencesSchema = new mongoose.Schema({
    theme: {
        type: String,
        required: false,
        default: "dark"
    },
    backgroundColor: {
        type: String,
        required: false,
        default: undefined
    },
    accentColor: {
        type: String,
        required: false,
        default: undefined
    },
    textColor: {
        type: String,
        required: false,
        default: undefined
    },
    textSize: {
        type: Number,
        required: false,
        default: undefined
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    rootId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    preferences: {
        type: preferencesSchema,
        required: false,
        default: () => ({})
    }
})

const User = mongoose.model("User", userSchema)
export default User