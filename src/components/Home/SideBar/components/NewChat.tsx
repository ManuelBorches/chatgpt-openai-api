'use client';

import { PlusIcon } from '@heroicons/react/24/solid';
import { createFirestoreChat } from '@utils/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await createFirestoreChat(session);
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <span>NewChat</span>
    </div>
  );
};
