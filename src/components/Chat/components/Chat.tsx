import { type FC } from 'react';

interface ChatProps {
  chatId: string;
}

export const Chat: FC<ChatProps> = ({ chatId }) => {
  return <div className="flex-1">Chat</div>;
};
