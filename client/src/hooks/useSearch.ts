import { useState } from "react"
import { sendPostRequest } from "../utils/sendPostRequest"
import { errorToast } from "../utils/toasts"

interface ResultsProps{
    folders: [];
    notes: [];
}

export const useSearch = () => {
    const [results, setResults] = useState<ResultsProps>({folders: [], notes: []})
    const [isSearching, setIsSearching] = useState(false)

    const search = async (query:string) => {
        setIsSearching(true)
        if(query === ''){
            setResults({folders: [], notes: []})
        }else{

            try {
                const response = await sendPostRequest('/search', {query: query})
                if(response.success){
                    setResults({folders: response.folders, notes: response.notes})
                }else if(response.error){
                    throw new Error(response.error);
                }else{
                    throw new Error('Error while searching')
                }
            } catch (error:any) {
                errorToast(error)
                console.log(error)            
            }
        }
        setIsSearching(false)
    }

    return {search, results, isSearching}
}