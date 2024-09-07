import { sendPostRequest } from "../utils/sendPostRequest"



export const useSearch = () => {
    const search = async (query:string) => {
        const result = await sendPostRequest('/search', {query: query})
        console.log(result)
    }

    return {search}
}