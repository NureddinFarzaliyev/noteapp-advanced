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
        default: null
    },
    accentColor: {
        type: String,
        required: false,
        default: null
    },
    textSize: {
        type: Number,
        required: false,
        default: null
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
    preferences: {
        type: preferencesSchema,
        required: false,
        default: () => ({})
    }
})

const User = mongoose.model("User", userSchema)
export default User