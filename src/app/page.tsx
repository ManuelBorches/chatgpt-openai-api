import { InfoPromptGuides } from '@components/Home';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <InfoPromptGuides />
    </div>
  );
}
