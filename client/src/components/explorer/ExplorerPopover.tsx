import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import ExplorerButton from './ExplorerButton';

function ExplorerPopover({children, icon} : {children:any,icon:string}) {

    return (
        <Popover>
            <PopoverButton as='div'>
                <ExplorerButton>
                    <img src={icon} />
                </ExplorerButton>
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-900 shadow-2xl rounded-md p-3 absolute mt-1" >
                {children}
            </PopoverPanel>
        </Popover>
    )
}

export default ExplorerPopover
