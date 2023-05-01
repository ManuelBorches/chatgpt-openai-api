import { type DocumentData, type QuerySnapshot } from 'firebase/firestore';

export const getTextMessage = (
  messages: QuerySnapshot<DocumentData> | undefined
) => messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat';
