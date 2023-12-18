import React from 'react';
import { TbMessageChatbot } from 'react-icons/tb';

const ChatBox = () => {
  return (
    <div className="fixed bottom-5 right-8 text-amber-400 text-4xl cursor-pointer bg-white rounded-full p-2 animate-bounce hover:animate-spin active:bg-amber-400 active:text-white ">
      <TbMessageChatbot />
    </div>
  );
};

export default ChatBox;
