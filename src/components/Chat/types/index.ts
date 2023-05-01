import { type FieldValue } from 'firebase/firestore';

export interface IMessage {
  text: string;
  // createdAt: admin.firestore.Timestamp;
  createdAt: FieldValue;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
