import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import SendEth from "./SendEth";

const LoggedHeader = () => {
    const { user } = useMoralis();
    return (
        <div className="sticky top-0 p-6 z-50 header-bg-glassmorphism shadow-sm">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative lg:w-24 lg:h-24 md:w-20 md:h-20 w-14 h-14 
                mx-auto lg:inline-grid">
                    <Avatar isCurrentUser={true} logoutOnClick />
                </div>
                <div className="col-span-4 lg:text-center text-left text-custom-gradient">
                    <h1 className="lg:text-3xl text-sm">WelCoded dApp Chat!</h1>
                    <h2 className="lg:text-3xl text-sm truncate"><b>Logged as</b>: {user.getUsername()}</h2>
                    <ChangeUsername />
                    <SendEth />
                </div>
            </div>
        </div>
    )
}

export default LoggedHeader;
