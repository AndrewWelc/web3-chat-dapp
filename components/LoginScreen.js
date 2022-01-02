import Image from "next/image";
import logoPic from "../public/images/welcoded-logo.png";
import { useMoralis } from "react-moralis";

function LoginScreen() {
    const { authenticate } = useMoralis();

    const loginWithWalletConnect = () => {
        authenticate({provider: "walletconnect"});
    }
    return (
        <div className="relative w-full h-screen gradient-bg-login-screen">
            <h1>Login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-6">
                <Image src={logoPic} className="object-cover rounded-full" width={250} height={250} />
                <button onClick={authenticate} className="bg-[#9f85ff] rounded-lg p-5 font-bold hover:animate-pulse text-gray-100">Login via MetaMask (🖥️)</button>
                <button onClick={loginWithWalletConnect} className="bg-[#383152] rounded-lg p-5 font-bold hover:animate-pulse text-gray-100">Login via WalletConnect (📱)</button>
            </div>
        </div>
    )
}

export default LoginScreen
