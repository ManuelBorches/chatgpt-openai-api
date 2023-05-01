'use client';

import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import { serverTimestamp } from 'firebase/firestore';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { type IMessage } from '../types';

interface ChatInputProps {
  chatId: string;
}

export const ChatInput: FC<ChatInputProps> = ({ chatId }) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event?.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt('');

    // TODO: post firestore message
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const message: IMessage = {
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
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={handleSubmit} className="p-5 space-x-5 flex">
        <input
          value={prompt}
          onChange={handlePromptChange}
          type="text"
          placeholder="Type ypur message here..."
          disabled={!session}
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
        />

        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* TODO: AI Model Selection */}</div>
    </div>
  );
};
