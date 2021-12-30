import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import TimeAgo from 'timeago-react';

function SingleMessage({ message }) {
    const { user } = useMoralis();
    const isCurrentUserMsg = message.get('ethAddress') === user.get('ethAddress');
    return (
        <div className={`items-end flex space-x-2 relative ${isCurrentUserMsg && 'justify-end'}`}>

            <div className={`h-8 w-8 relative ${isCurrentUserMsg && 'order-last ml-2'}`}>
                <Avatar username={message.get('username')} />
            </div>
            <div className={`flex p-3 rounded-lg space-x-4 ${isCurrentUserMsg ? 'rounded-br-none bg-green-400' : 'rounded-bl-none bg-blue-300'}`}>
                <p>
                    {message.get('message')}
                </p>
            </div>

            <TimeAgo datetime={message.createdAt} className={`text-[10px] italic text-slate-500 ${isCurrentUserMsg && 'pr-1 order-first'}`} />

            <p className={`absolute -bottom-5 text-xs ${isCurrentUserMsg ? 'text-green-400' : 'text-blue-400'}`}>
                {message.get('username')}
            </p>
        </div>
    )
}

export default SingleMessage
