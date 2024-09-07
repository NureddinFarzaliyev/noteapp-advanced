import { useState, useEffect } from "react"
import { useSearch } from "../../hooks/useSearch";

function Search() {
    const [input, setInput] = useState('')
    const {search} = useSearch()

    useEffect(() => {
        const timer = setTimeout(() => {
            search(input)
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [input])


    return (
        <div className="border-2 p-2">
            <input type="text" placeholder="Search for files and folders" 
            value={input} onChange={(e) => {setInput(e.target.value)}} />
        </div>
    )
}

export default Search