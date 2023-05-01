'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
export const Login = () => {
  const handleSignIn = async () => await signIn('google');

  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={handleSignIn}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};
