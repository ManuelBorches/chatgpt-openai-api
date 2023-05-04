import { type Session } from 'next-auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@root/firebase';
import { type Message } from '@root/typings';

export const createFirestoreChat = async (session: Session | null) =>
  await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
    userId: session?.user?.email!,
    createdAt: serverTimestamp(),
  });

export const getFirestoreChats = (session: Session | null) =>
  session &&
  query(
    collection(db, 'users', session?.user?.email!, 'chats'),
    orderBy('createdAt', 'asc')
  );

export const getFirestoreChatById = (session: Session | null, id: string) =>
  collection(db, 'users', session?.user?.email!, 'chats', id, 'messages');

export const deleteFirestoreChat = async (
  session: Session | null,
  id: string
) => {
  await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
};

export const postToFirestore = async (
  session: Session | null,
  chatId: string,
  input: string
) => {
  const message: Message = {
    text: input,
    createdAt: serverTimestamp(),
    user: {
      _id: session?.user?.email!,
      name: session?.user?.name!,
      avatar:
        session?.user?.image! ||
        `https://ui-avatars.com/api/?name=${session?.user?.name ?? ''}`,
    },
  };

  await addDoc(
    collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    message
  );
};

export const getFirestoreMessages = (session: Session | null, chatId: string) =>
  session &&
  query(
    collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    orderBy('createdAt', 'asc')
  );
