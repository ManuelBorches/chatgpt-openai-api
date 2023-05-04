import { type FC } from 'react';
import Image from 'next/image';
import { type DocumentData } from 'firebase/firestore';

interface MessageProps {
  message: DocumentData;
}

export const Message: FC<MessageProps> = ({ message }) => {
  const isChatGPT = message.user.name === 'ChatGPT';
  return (
    <div className={`py-5 text-white ${(isChatGPT && 'bg-[#434654]') || ''}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <Image
          src={message.user.avatar}
          alt=""
          className="h-8 w-8"
          width={200}
          height={200}
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};
