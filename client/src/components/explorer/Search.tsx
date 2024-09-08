import { useState, useEffect } from "react"
import { useSearch } from "../../hooks/useSearch";
import SearchResults from "./SearchResults";

function Search({changeId} : {changeId: React.Dispatch<React.SetStateAction<string>>}) {
    const [input, setInput] = useState('')
    const {search, results, isSearching} = useSearch()

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
            <div>{isSearching === true && 'Searching...'}</div>

            <SearchResults changeId={changeId} results={results} />

        </div>
    )
}

export default Search