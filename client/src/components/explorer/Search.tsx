import { useState, useEffect } from "react"
import { useSearch } from "../../hooks/useSearch";
import SearchResults from "./SearchResults";
import ReactLoading from 'react-loading'

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
        <div className="relative">
            <input className="text-black rounded w-96 px-2" type="text" placeholder="Search for files and folders" 
            value={input} onChange={(e) => {setInput(e.target.value)}} />
            <div className="absolute top-0 right-0 text-black">{isSearching === true && <ReactLoading type="spin" />}</div>

            <SearchResults changeId={changeId} results={results} />
        </div>
    )
}

export default Search