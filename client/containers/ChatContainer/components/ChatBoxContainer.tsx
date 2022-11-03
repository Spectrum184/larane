import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxBody from './ChatBoxBody';
import ChatBoxFooter from './ChatBoxFooter';
import React from 'react';

const ChatBoxContainer = () => {
  return (
    <section className='flex flex-col flex-auto border-l border-gray-300'>
      <ChatBoxHeader />
      <ChatBoxBody />
      <ChatBoxFooter />
    </section>
  );
};

export default ChatBoxContainer;
