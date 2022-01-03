import { useMoralis } from "react-moralis"

const ChangeUsername = () => {

    const { setUserData, user, isUserUpdating} = useMoralis();

    const setUserName = () => {
        const username = prompt(`Your current username is: ${user.getUsername()}. Enter new name`);

        if (!username) return;

        setUserData({username});
    }

    return (
        <div className="text-sm absolute top-5 right-5 text-custom-blue">
            <button disabled={isUserUpdating} className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border 
            border-[#9f85ff] hover:bg-[#9f85ff] text-[#9f85ff] hover:text-white font-normal py-2 px-2 rounded"
            onClick={setUserName}>Change name</button>
        </div>
    )
}

export default ChangeUsername;
