import NameComponent from "./NameComponent";
import DeleteComponent from "./DeleteComponent";
import noteIcon from '../../assets/file.svg'
import CustomFolderSvg from "./CustomFolderSvg";

export interface InfoDataType {
    type: 'folder' | 'note';
    name: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
}
interface InfoProps {
    data: InfoDataType | undefined,
    // setSelfData: React.Dispatch<React.SetStateAction<InfoDataType | undefined>>;
    render:  React.Dispatch<React.SetStateAction<number>>;
}

function InfoView({data, render}:InfoProps) {
    if(data){
        return (
            <div className="bg-gray-900 p-5 rounded-lg shadow-xl w-[22vw] h-[90vh] m-2 hidden md:block">
                <div className="flex flex-col items-center justify-center gap-4">
                    {data.type === 'folder' ? <CustomFolderSvg /> : <img src={noteIcon} alt="note"  />}
                    <div className="text-2xl">{data.name}</div>
                </div>
                <hr className="mt-5 mb-5 opacity-20" />
                <div className="mb-5"><span className="opacity-20">Created At:</span> {`${data.createdAt.split('T')[0]} ${data.createdAt.split('T')[1].split(":")[0]}:${data.createdAt.split('T')[1].split(":")[1]}`}</div>
                <div className="">
                    <NameComponent type={data.type} id={data._id} forceRender={render} />
                </div>
                <div className="mt-5"></div>
            <DeleteComponent type={data.type} id={data._id} forceRender={render} />
            </div>
        )
    }else{
        return(
        <div className="bg-gray-900 p-5 rounded-lg shadow-xl w-[22vw] h-[90vh] m-2 hidden md:flex items-center justify-center">
            <p className="w-[70%] text-center opacity-50 text-sm">Click on an item to delete or change their name and see more information about them.</p>
        </div>
        )
    }
}

export default InfoView
