import { useGetUserData } from "../../hooks/useGetUserData"
import Profile from "./Profile"
import ChangeUsername from "./ChangeUsername"
import ChangePassword from "./ChangePassword"

interface HookProps {
    isLoading: boolean;
    userData: any;
}

function AccountSettings() {
    const {isLoading, userData} : HookProps = useGetUserData()

    if(isLoading === true){
        return <h1>Loading</h1>
    }else{
        return (
            <div className="  p-2">
                <h1>Account settings</h1>
                <Profile username={userData?.username} />
                <ChangeUsername />
                <ChangePassword />
            </div>
        )
    }
}

export default AccountSettings