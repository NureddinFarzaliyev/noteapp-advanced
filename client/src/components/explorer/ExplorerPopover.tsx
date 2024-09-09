import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import ExplorerButton from './ExplorerButton';

function ExplorerPopover({children, icon} : {children:any,icon:string}) {
    return (
        <Popover>
            <PopoverButton>
                <ExplorerButton>
                    <img src={icon} />
                </ExplorerButton>
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col bg-gray-900 shadow-lg rounded-md p-3">
                {children}
            </PopoverPanel>
        </Popover>
    )
}

export default ExplorerPopover
