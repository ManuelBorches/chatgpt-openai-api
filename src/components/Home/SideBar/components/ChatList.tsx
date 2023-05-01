import { type FC } from 'react';
import { type DocumentData, type QuerySnapshot } from 'firebase/firestore';
import { ChatRow } from './ChatRow';

interface ChatListProps {
  chats?: QuerySnapshot<DocumentData>;
}

export const ChatList: FC<ChatListProps> = ({ chats }) => (
  <>
    {chats?.docs.map((chat) => (
      <ChatRow key={chat.id} id={chat.id} />
    ))}
  </>
);
