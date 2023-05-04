'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import chatGPT from 'public/images/chat-no-bg.png';
export const Login = () => {
  const handleSignIn = async () => await signIn('google');

  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center">
      <Image src={chatGPT} width={300} height={300} alt="logo" />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={handleSignIn}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};
