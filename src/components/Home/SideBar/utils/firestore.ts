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

export const createFireStoreChat = async (session: Session | null) =>
  await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
    userId: session?.user?.email!,
    createdAt: serverTimestamp(),
  });

export const getFireStoreChats = (session: Session | null) =>
  query(
    collection(db, 'users', session?.user?.email!, 'chats'),
    orderBy('createdAt', 'asc')
  );

export const getFireStoreChatById = (session: Session | null, id: string) =>
  collection(db, 'users', session?.user?.email!, 'chats', id, 'messages');

export const deleteFireStoreChat = async (
  session: Session | null,
  id: string
) => {
  await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
};
