import { type FC } from 'react';
import { type DocumentData, type QuerySnapshot } from 'firebase/firestore';
import { ChatRow } from './ChatRow';

interface ChatListProps {
  chats?: QuerySnapshot<DocumentData>;
  loading: boolean;
}

export const ChatList: FC<ChatListProps> = ({ chats, loading }) => (
  <div className="flex flex-col space-y-2 my-2">
    {loading && (
      <span className="aniamte-pulse text-center text-white">
        Loading Chats...
      </span>
    )}
    {chats?.docs.map((chat) => (
      <ChatRow key={chat.id} id={chat.id} />
    ))}
  </div>
);
