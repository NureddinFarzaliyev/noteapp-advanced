import { sendPostRequest } from "../utils/sendPostRequest"
import { PreferencesType } from "../contexts/PreferencesContext"
import { successToast, errorToast } from "../utils/toasts"
import { useState } from "react"

export const usePreferences = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isChanged, setIsChanged] = useState(false)

    const updatePreferencesOnServer = async (body: PreferencesType | undefined) => {
        setIsLoading(true)
        try {
            const result = await sendPostRequest('/update/preferences', {preferences: body})
            if(result.success){
                successToast("Changes saved. Please refresh or click 'Apply' to apply them.")
            }else if(result.error){
                throw new Error(result.error)
            }
        } catch (error: any) {
            errorToast(error)            
        }
        setIsLoading(false)
        setIsChanged(true)
    }

    return {updatePreferencesOnServer, isLoading, isChanged}
}
