import { useState, useEffect } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"


export const useGetUserData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({})

    const getUserData = async () => {
        try {
            setIsLoading(true)

            const result = await sendPostRequest('/auth/userdata', {
                id: localStorage.getItem('noteapp-id')
            })

            if(result.success === true){
                setUserData(result.user)
            }else{
                throw new Error(result.error ? result.error : "Unexpected Error Occured")
            }
            
        } catch (error) {
            console.log(error)            
        }
        
        setIsLoading(false)
    }

    useEffect(() => {
        getUserData()
    }, [])

    return {userData, isLoading}
}