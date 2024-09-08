import { Link } from "react-router-dom";

interface ResultObj{
    folders: Folder[];
    notes: Note[];
}

interface SearchProps {
    results: ResultObj;
    changeId: React.Dispatch<React.SetStateAction<string>>;
}

interface Folder{
    _id: string;
    name: string;
}

interface Note{
    _id: string;
    name: string;
}

function SearchResults({results, changeId} : SearchProps) {
    return (
        <>
        <div>
            {results.folders?.map((folder) => <div onClick={() => {changeId(folder._id)}} key={folder._id}>{folder.name}</div>)}
        </div>
        <div>
            {results.notes?.map((note) => <Link to={`/edit/${note._id}`} key={note._id}>{note.name}</Link>)}
        </div>
        </>
    )
}

export default SearchResults
