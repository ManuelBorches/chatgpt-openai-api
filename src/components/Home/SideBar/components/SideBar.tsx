/* eslint-disable @next/next/no-img-element */
'use client';

import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { NewChat } from './NewChat';
import { ChatList } from './ChatList';
import { getFirestoreChats } from '@utils/firestore';
import { ModelSelection } from './ModelSelection';

export const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading] = useCollection(getFirestoreChats(session));

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="p-2 flex flex-col h-screen bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
      <div className="flex-1">
        <NewChat />

        <div className="hidden md:inline">
          <ModelSelection />
        </div>
        <ChatList chats={chats} loading={loading} />
      </div>
      {session != null && (
        <img
          onClick={handleSignOut}
          src={session.user?.image!}
          alt="profile pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  );
};
