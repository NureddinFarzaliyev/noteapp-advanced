import { Link } from "react-router-dom";
import CustomFolderSvg from "./CustomFolderSvg";
import noteIcon from '../../assets/file.svg'

interface ResultObj{
    folders: Folder[];
    notes: Note[];
}

interface SearchProps {
    results: ResultObj;
    changeId: React.Dispatch<React.SetStateAction<string>>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
}

interface Folder{
    _id: string;
    name: string;
}

interface Note{
    _id: string;
    name: string;
}

function SearchResults({results, changeId, setInput} : SearchProps) {
    return (
        <div className="absolute w-96 shadow-xl bg-gray-900 z-[9999]">
            <div>
                {results.folders?.map((folder) => <div className="flex gap-2 m-1 items-center hover:bg-gray-800 cursor-pointer p-[0.1rem]"
                onClick={() => {changeId(folder._id); setInput('')}} key={folder._id}>
                    <CustomFolderSvg width={25} height={20} />
                    <span>{folder.name}</span>
                </div>)}
            </div>
            <div>
                {results.notes?.map((note) => <div className="m-1 items-center hover:bg-gray-800 cursor-pointer p-[0.1rem]">
                    <Link to={`/edit/${note._id}`} key={note._id} className="flex gap-2">
                        <img src={noteIcon} className="h-5 ml-1" alt="" />
                        <span>{note.name}</span>
                    </Link>
                </div>)}
            </div>
        </div>
    )
}

export default SearchResults