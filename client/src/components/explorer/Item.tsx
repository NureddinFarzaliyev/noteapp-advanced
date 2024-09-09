import folderIcon from '../../assets/folder.svg'
import noteIcon from '../../assets/file.svg'
import { useState } from 'react';

function Item({name, type, isChosen} : {name:string; type: 'folder' | 'note'; isChosen: boolean;})  {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className={`flex flex-col items-center gap-1 p-2 w-28 rounded ${isChosen && 'bg-[rgba(52,152,219,.5)]'}`}
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
        style={{backgroundColor: `${isHovered === true && isChosen === false ? 'rgba(52,152,219,.2)' : ''}`,}}>
            <img src={type === 'folder' ? folderIcon : noteIcon} alt="" />
            <div className='text-sm truncate overflow-hidden whitespace-nowrap w-28'>{name}</div>
        </div>
    )
}

export default Item