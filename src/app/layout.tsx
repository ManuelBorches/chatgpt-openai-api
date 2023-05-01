import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { authOptions } from './api/auth/[...nextauth]/route';
import { SessionProvider, Login } from '@components/auth';
import { SideBar } from '@components/Home';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChatGTP OpenAI API',
  description: 'OpenAI models integrated in an awesome chat',
};
// TODO "stream" : "true" in the OpenAI API call to get the typewriter effect in Next JS edge functions
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {session != null ? (
            <div className="flex">
              <SideBar />
              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          ) : (
            <Login />
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
