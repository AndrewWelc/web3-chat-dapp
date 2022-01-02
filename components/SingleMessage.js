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
            <div className={`flex p-3 rounded-lg text-[#f9f7ff] space-x-4 ${isCurrentUserMsg ? 'rounded-br-none bg-[#9f85ff]' : 'rounded-bl-none bg-[#383152]'}`}>
                <p>
                    {message.get('message')}
                </p>
            </div>

            <TimeAgo datetime={message.createdAt} className={`text-[10px] italic text-slate-400 ${isCurrentUserMsg && 'pr-1 order-first'}`} />

            <p className={`absolute -bottom-5 text-xs ${isCurrentUserMsg ? 'text-[#9f85ff]' : 'text-[#998ec2]'}`}>
                {message.get('username')}
            </p>
        </div>
    )
}

export default SingleMessage
