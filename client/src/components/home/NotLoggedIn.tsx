import Login from "../auth/Login"
import Signup from "../auth/Signup"

function NotLoggedIn() {
    return (
        <div className="bg-gray-900 h-dvh w-dvw p-10 flex justify-between">
            <div className="text-white w-[65%]">
                <h1 className="text-5xl">NoteAPP</h1>
                <p className="w-[50%] my-5">This is a MERN-Stack Note-taking Application which lets you create folder structure and save your notes in it. You can also customize the app with the colors you like.</p>
                <a href="https://www.github.com/nureddinfarzaliyev/noteapp-advanced" className="opacity-70 hover:opacity-100 transition-all">
                    Made by <u>Nureddin Farzaliyev</u> Source code is available on <u>GitHub</u>.
                </a>
            </div>
            <div className="w-[35%]">
                <Login />
                <hr className="mt-10 opacity-20" />
                <Signup />
            </div>
        </div>
    )
}

export default NotLoggedIn
