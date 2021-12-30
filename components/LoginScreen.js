import Image from "next/image";
import backgroundPic from "../public/images/bg-photo.jpg";
import logoPic from "../public/images/eth-logo.png";
import { useMoralis } from "react-moralis";

function LoginScreen() {
    const { authenticate } = useMoralis();

    const loginWithWalletConnect = () => {
        authenticate({provider: "walletconnect"});
    }
    return (
        <div className="bg-black relative">
            <h1>Login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-6">
                <Image src={logoPic} className="object-cover rounded-full" width={200} height={200} />
                <button onClick={authenticate} className="bg-green-500 rounded-lg p-5 font-bold animate-bounce text-yellow-50">Login to the APP</button>
                <button onClick={loginWithWalletConnect} className="bg-green-500 rounded-lg p-5 font-bold animate-bounce text-yellow-50">Login via WalletConnect</button>
            </div>

            <div className="w-full h-screen">
                <Image src={backgroundPic} layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default LoginScreen
