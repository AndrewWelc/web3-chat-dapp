import { useMoralis } from "react-moralis"

function ChangeUsername() {

    const { setUserData, user, isUserUpdating, useError} = useMoralis();

    const setUserName = () => {
        const username = prompt(`Your current username is: ${user.getUsername()}. Enter new UserName`);

        if (!username) return;

        setUserData({username});
    }

    return (
        <div className="text-sm absolute top-5 right-5 text-custom-blue">
            <button disabled={isUserUpdating} className="hover:text-green-800"
            onClick={setUserName}>Change username!</button>
        </div>
    )
}

export default ChangeUsername
