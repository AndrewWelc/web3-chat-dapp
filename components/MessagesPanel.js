import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis"
import { useRef } from "react";
import SendMessage from "./SendMessage";
import SingleMessage from "./SingleMessage";

// show msgs from last 30 mins
const LAST_MSGS_MINUTES = 30;


const MessagesPanel = () => {

    const { user } = useMoralis();
    const endOfMsgRef = useRef(null);
    const { data, isLoading, error } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * LAST_MSGS_MINUTES)),
        [],
        {
            live: true
        }
    );

        if (data && endOfMsgRef.current) {
            endOfMsgRef.current.scrollIntoView({behavior: 'smooth'});
        }

    return (

        <div className="pb-56">
            <div className="p-4 space-y-10">
                {data.map(message => (
                    <SingleMessage key={message.id} message={message} />
                ))}
            </div>

            <div className="flex justify-center">
                <SendMessage endOfMsgRef={endOfMsgRef} />
            </div>

            <div className="text-zinc-300 italic mt-10 text-center animate-pulse opacity-75">
                <p ref={endOfMsgRef}>{user.getUsername()}, you are up to date. 🤝</p>
                <p>Your ETH address is: {user.get("ethAddress")}</p>
            </div>
        </div>
    )
}

export default MessagesPanel;
