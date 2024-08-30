import { useState } from "react"

interface changeData {
    username?: string;
    password?: string;
    confirm?: string;
    newUsername?: string;
    newPassword?: string;
}

export const useHandleChange = ()  => {
    const [changeData, setChangeData] = useState<changeData>({})

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChangeData({
            ...changeData,
            [e.target.name]: e.target.value
        })
    }

    return {changeData, handleChange}
}