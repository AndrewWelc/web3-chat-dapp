import Image from "next/image";
import { useMoralis } from "react-moralis"
import logoPic from "../public/images/eth-logo.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function LoggedHeader() {
    const { user } = useMoralis();
    return (
        <div className="text-green-500 sticky top-0 p-6 z-50 bg-black shadow-sm border-green-700 border-b-2">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative w-24 h-24 mx-auto hidden lg:inline-grid">
                    <Image objectFit="cover" layout="fill" className="rounded-full" src={logoPic} />
                </div>
                <div className="col-span-4 lg:text-center text-left">
                    <div className="relative w-9 h-9 lg:w-48 lg:h-48 lg:mx-auto border-green-500 lg:border-4 border-2  rounded-full">
                        <Avatar logoutOnClick />
                    </div>

                    <h1 className="lg:text-3xl text-sm">Welcome to WelCoded dApp Chat!</h1>
                    <h2 className="lg:text-3xl text-sm truncate"><b>Logged as</b>: {user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default LoggedHeader
