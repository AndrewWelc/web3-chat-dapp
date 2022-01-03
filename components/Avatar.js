import Image from "next/image";
import { useMoralis } from "react-moralis"

const Avatar = ({isCurrentUser, username, logoutOnClick}) => {
    const {user, logout} = useMoralis();
    
    return <Image layout="fill" className={`rounded-full ${isCurrentUser ? 'bg-[#573fad]' : 'bg-[#29233b]'} cursor-pointer hover:opacity-70`} src={`https://avatars.dicebear.com/api/personas/${username || user.get('username')}.svg`}
    onClick={() => logoutOnClick && logout()}
    />
}

export default Avatar;
