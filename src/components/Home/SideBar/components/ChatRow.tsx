import { useState, useEffect, type FC } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { getFirestoreChatById, deleteFirestoreChat } from '@utils/firestore';
import { getTextMessage } from '../utils';

interface ChatRowProps {
  id: string;
}

export const ChatRow: FC<ChatRowProps> = ({ id }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [messages] = useCollection(getFirestoreChatById(session, id));
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname, id]);

  const removeChat = async () => {
    await deleteFirestoreChat(session, id);
    router.replace('/');
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow ${(active && 'bg-gray-700/50') || ''}`}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {getTextMessage(messages)}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
};
