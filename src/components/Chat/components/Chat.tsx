'use client';

import { useSession } from 'next-auth/react';
import { type FC } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Message } from './Message';
import { getFirestoreMessages } from '@utils/firestore';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

interface ChatProps {
  chatId: string;
}

export const Chat: FC<ChatProps> = ({ chatId }) => {
  const { data: session } = useSession();
  const [messages] = useCollection(getFirestoreMessages(session, chatId));

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
};
