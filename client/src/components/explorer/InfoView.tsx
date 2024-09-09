import NameComponent from "./NameComponent";
import DeleteComponent from "./DeleteComponent";

export interface InfoDataType {
    type: 'folder' | 'note';
    name: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
}
interface InfoProps {
    data: InfoDataType | undefined,
    setSelfData: React.Dispatch<React.SetStateAction<InfoDataType | undefined>>;
    render:  React.Dispatch<React.SetStateAction<number>>;
}

function InfoView({data, setSelfData, render}:InfoProps) {
    if(data){
        return (
            <div className="  m-2">
                <h1>Information</h1>
                <div>{data.name}</div>
                <div>Created At: {data.createdAt}</div>
                <div>Updated At: {data.updatedAt}</div>

                <NameComponent type={data.type} id={data._id} forceRender={render} />
                <DeleteComponent type={data.type} id={data._id} forceRender={render} />
                <button onClick={() => {setSelfData(undefined)}}>CLOSE INFO</button>
            </div>
        )
    }else{
        return('')
    }
}

export default InfoView
