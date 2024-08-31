import { sendPostRequest } from "./sendPostRequest"

export const fetchPreferences = async () => {
    return new Promise(async (resolve, reject) => {
        const result = await sendPostRequest('/auth/userdata', {id: localStorage.getItem('noteapp-id')})
        if(result.success){
            resolve(result.user.preferences)
        }else{
            reject("Error occured")
        }
    })
}