import { useMoralis, ByMoralis, useMoralisQuery } from "react-moralis"
import { useRef } from "react";
import SendMessage from "./SendMessage";
import SingleMessage from "./SingleMessage";

// show msgs from last 10 mins
const LAST_MSGS_MINUTES = 10;


function MessagesPanel() {

    const { user } = useMoralis();
    const endOfMsgRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * LAST_MSGS_MINUTES)),
        [],
        {
            live: true
        }
    );


    return (

        <div className="pb-56">
            <div className="hidden lg:my-5 lg:flex">
                <ByMoralis style={{ marginRight: 'auto', marginLeft: 'auto' }} variant="dark" />
            </div>
            <div className="p-4 space-y-10">
                {data.map(message => (
                    <SingleMessage key={message.id} message={message} />
                ))}
            </div>

            <div className="flex justify-center">
                <SendMessage endOfMsgRef={endOfMsgRef} />
            </div>

            <div className="text-zinc-300 italic mt-5 text-center">
                <p ref={endOfMsgRef}>{user.getUsername()}, you are up to date. 🤝</p>
            </div>
        </div>
    )
}

export default MessagesPanel
