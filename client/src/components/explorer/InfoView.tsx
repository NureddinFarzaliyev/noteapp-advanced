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
}


function InfoView({data, setSelfData}:InfoProps) {
    if(data){
        return (
            <div className="border-2 m-2">
                <h1>Information</h1>
                <div>{data.type}</div>
                <div>{data.name}</div>
                <div>Created At: {data.createdAt}</div>
                <div>Updated At: {data.updatedAt}</div>

                <button onClick={() => {setSelfData(undefined)}}>CLOSE INFO</button>
            </div>
        )
    }else{
        return('')
    }
}

export default InfoView
