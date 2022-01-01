import Image from "next/image";
import { useMoralis } from "react-moralis"
import logoPic from "../public/images/eth-logo.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function LoggedHeader() {
    const { user } = useMoralis();
    return (
        <div className="text-custom-gradient sticky top-0 p-6 z-50 header-bg-glassmorphism shadow-sm">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid border-custom-blue lg:border-4 border-2  rounded-full">
                    <Avatar logoutOnClick />
                </div>
                <div className="col-span-4 lg:text-center text-left">
                
                    <h1 className="lg:text-3xl text-sm">Welcome to WelCoded dApp Chat!</h1>
                    <h2 className="lg:text-3xl text-sm truncate"><b>Logged as</b>: {user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default LoggedHeader
