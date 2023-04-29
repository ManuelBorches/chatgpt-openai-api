import { SideBar } from '@components/Home/SideBar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ChatGTP OpenAI API',
  description: 'OpenAI models integrated in an awesome chat',
};
// TODO "stream" : "true" in the OpenAI API call to get the typewriter effect in Next JS edge functions
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar />
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
