import { useState } from "react"
import { useMoralis } from "react-moralis"

const SendMessage = ({endOfMsgRef}) => {

    const { user, Moralis } = useMoralis();
    const [ message, setMessage ] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();

        if(!message) return;

        const MoralisMessages = Moralis.Object.extend('Messages');
        const messages = new MoralisMessages();

        messages.save({
            message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {
            // msg sent successfully.
        }, (error) => {
            // TODO: implement error modal
        }
        )

        endOfMsgRef.current.scrollIntoView({behavior: 'smooth'});
        setMessage("");
    }
    return (
        <form className="flex w-11/12 fixed bottom-10 opacity-80 bg-black max-w-2xl shadow-xl 
        rounded-full border-2 border-custom-blue px-6 py-4">
            <input type="text" className="flex-grow bg-transparent text-white outline-none pr-6 placeholder-gray-300" 
            placeholder={`Write a message, ${user.getUsername()}...`} value={message}
            onChange={e => setMessage(e.target.value)} />
            <button className="text-[#9f85ff] font-bold hover:text-[#c5bee0]" onClick={sendMessage}>Send</button>

        </form>
    )
}

export default SendMessage;