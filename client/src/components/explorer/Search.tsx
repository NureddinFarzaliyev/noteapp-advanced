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
        }, 750);

        return () => {
            clearTimeout(timer);
        };
    }, [input])

    return (
        <div className="relative">
            <input className="text-black z-10 rounded w-44 md:w-96 px-2 h-8" type="text" placeholder="Search for files and folders" 
            value={input} onChange={(e) => {setInput(e.target.value)}} />
            <div className="absolute top-1 right-1 z-20 text-black">{isSearching === true && <ReactLoading color="black" type="spin" height={24} width={24} />}</div>

            <SearchResults changeId={changeId} results={results} />
        </div>
    )
}

export default Search