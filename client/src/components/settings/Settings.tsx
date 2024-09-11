import { useState } from "react"
import AccountSettings from "./AccountSettings"
import Preferences from "./Preferences"

function Settings({setOpen} : {setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [panel, setPanel] = useState<'A'|'P'>('A')

    return (
        <div className="bg-[rgba(0,0,0,.75)] h-dvh w-dvw absolute top-0 left-0">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex gap-3 justify-start p-10 bg-gray-900 h-[80%] w-[80%] rounded">
                <div className="flex flex-col gap-3 items-start">
                    <button className={`w-40 p-1 rounded pl-3 text-left ${panel !== 'A' && "opacity-20 hover:opacity-100"} transition-all ${panel === 'A' && 'bg-[var(--accent-color)] opacity-100'}`} onClick={() => {setPanel("A")}}>Account</button>
                    <button className={`w-40 p-1 rounded pl-3 text-left ${panel !== 'P' && "opacity-20 hover:opacity-100"} transition-all ${panel === 'P' && 'bg-[var(--accent-color)] opacity-100'}`} onClick={() => {setPanel("P")}}>Preferences</button>
                </div>
                <div className="h-[100%] w-[0.15rem] bg-white opacity-20 mx-10"></div>
                <div>
                    {panel === 'A' && <AccountSettings />}
                    {panel === 'P' && <Preferences />}
                </div>
                <button className="absolute right-16 p-2 opacity-20 hover:opacity-100 transition-all" onClick={() => {setOpen(false)}}>X</button>
            </div>
        </div>
    )
}

export default Settings