import { useGetUserData } from "../../hooks/useGetUserData"
import Profile from "./Profile"
import ChangeUsername from "./ChangeUsername"
import ChangePassword from "./ChangePassword"
import ReactLoading from "react-loading";

interface HookProps {
    isLoading: boolean;
    userData: any;
}

function AccountSettings() {
    const {isLoading, userData} : HookProps = useGetUserData()

    if(isLoading === true){
        return <div className="h-full w-full"><ReactLoading color="white" type="spin" height={60} width={60} /></div>
    }else{
        return (
            <div className="p-2">
                <Profile username={userData?.username} />
                <ChangeUsername />
                <ChangePassword />
            </div>
        )
    }
}

export default AccountSettings