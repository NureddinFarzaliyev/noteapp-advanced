import { sendPostRequest } from "../utils/sendPostRequest"
import { PreferencesType } from "../contexts/PreferencesContext"

export const usePreferences = () => {

    const updatePreferencesOnServer = async (preferences: PreferencesType | undefined) => {

        try {
            console.log('SENDING: ', {preferences: preferences})
            const result = await sendPostRequest('/update/preferences', {preferences: preferences})
            console.log(result)
        } catch (error) {
            console.log(error)
        }


    }



    return {updatePreferencesOnServer}
}