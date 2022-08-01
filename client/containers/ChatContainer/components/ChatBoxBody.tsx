import React, { useEffect, useRef } from 'react';
import SvgComponent from '~/components/SvgComponent';

const MessageItem = () => (
  <div className='flex items-center flex-row-reverse group'>
    <p className='px-6 py-3 rounded-t-full rounded-l-full bg-blue-600 max-w-xs lg:max-w-md'>
      Hey! How are you?
    </p>
    <button
      type='button'
      className='hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2'
    >
      <SvgComponent name='view-more' className='w-full h-full fill-current' />
    </button>
    <button
      type='button'
      className='hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2'
    >
      <SvgComponent name='reply' className='w-full h-full fill-current' />
    </button>
    <button
      type='button'
      className='hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2'
    >
      <SvgComponent name='emotions' className='w-full h-full fill-current' />
    </button>
  </div>
);

const SendMessage = () => (
  <div className='flex items-center flex-row group'>
    <p className='px-6 py-3 rounded-t-full rounded-r-full bg-gray-600 max-w-xs lg:max-w-md text-gray-200'>
      Hey! How are you?
    </p>
    <button
      type='button'
      className='hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2'
    >
      <SvgComponent name='view-more' className='w-full h-full fill-current' />
    </button>
    <button
      type='button'
      className='hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2'
    >
      <SvgComponent name='reply' className='w-full h-full fill-current' />
    </button>
    <button
      type='button'
      className='hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-1 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2'
    >
      <SvgComponent name='emotions' className='w-full h-full fill-current' />
    </button>
  </div>
);

const ChatBoxBody = () => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className='chat-body p-4 flex-1 overflow-y-scroll'>
      <p className='p-4 text-center text-sm text-gray-500'>12:40 PM</p>
      <div className='flex flex-row justify-end'>
        <div className='messages text-sm text-white grid grid-flow-row gap-2'>
          {new Array(20).fill(0).map((_, index) => (
            <MessageItem key={index} />
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-start'>
        <div className='messages text-sm text-white grid grid-flow-row gap-2'>
          {new Array(20).fill(0).map((_, index) => (
            <SendMessage key={index} />
          ))}
        </div>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBoxBody;
