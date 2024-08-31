import { PreferencesType } from "../contexts/PreferencesContext"
import { sendPostRequest } from "./sendPostRequest"

export const fetchPreferences = async () : Promise<PreferencesType> => {
    return new Promise(async (resolve, reject) => {
        const result = await sendPostRequest('/auth/userdata', {id: localStorage.getItem('noteapp-id')})
        if(result.success){
            resolve(result.user.preferences)
        }else{
            reject("Error occured")
        }
    })
}
