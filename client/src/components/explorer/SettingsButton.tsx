import { useState } from "react"
import Settings from "../settings/Settings"

function SettingsButton() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsSettingsOpen(true)} className="opacity-20 hover:opacity-100 transition-all">Settings</button>
            {isSettingsOpen && <Settings setOpen={setIsSettingsOpen} />}
        </div>
    )
}

export default SettingsButton
