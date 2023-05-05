'use client';

import { useState, type FC, type ChangeEvent, type FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import { postToFirestore } from '@utils/firestore';
import { ModelSelection } from '@components/Home/SideBar';
import useSWR from 'swr';

interface ChatInputProps {
  chatId: string;
}

export const ChatInput: FC<ChatInputProps> = ({ chatId }) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState('');
  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  });

  const handlePromptChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event?.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt('');

    await postToFirestore(session, chatId, input);

    const notification = toast.loading('ChatGPT is thinking...');

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success('ChatGPT has responded!', {
        id: notification,
      });
    });
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
      <div className="md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
};
