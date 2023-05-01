import { Chat, ChatInput } from '@components/Chat';

interface ChatPageProps {
  params: {
    id: string;
  };
}
export default function ChatPage({ params: { id } }: ChatPageProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}
