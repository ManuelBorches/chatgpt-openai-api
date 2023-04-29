import { NewChat } from './NewChat';

export const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen bg-[#202123] max-w-xs overflow-y-auto md:min-w-[20rem]">
      <div className="flex-1">
        <div>
          <NewChat />
        </div>
      </div>
    </div>
  );
};
