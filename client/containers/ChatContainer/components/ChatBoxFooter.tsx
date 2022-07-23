import React, { useState } from 'react';
import SvgComponent from '~/components/SvgComponent';

const ChatBoxFooter = () => {
  const [chatMessage, setChatMessage] = useState<string>('');

  return (
    <div className='chat-footer flex-none border-t shadow-md border-gray-300'>
      <div className='flex flex-row items-center p-4'>
        <button
          type='button'
          className='flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6'
        >
          <SvgComponent
            name='more-actions'
            className='w-full h-full fill-current'
          />
        </button>
        <button
          type='button'
          className='flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6'
        >
          <SvgComponent name='picture' className='w-full h-full fill-current' />
        </button>
        <button
          type='button'
          className='flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6'
        >
          <SvgComponent name='camera' className='w-full h-full fill-current' />
        </button>
        <button
          type='button'
          className='flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6'
        >
          <SvgComponent name='micro' className='w-full h-full fill-current' />
        </button>
        <div className='relative flex-grow'>
          <label>
            <input
              className='rounded-full py-2 pl-3 pr-10 w-full bg-gray-300 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in'
              type='text'
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder='Aa'
            />
            <button
              type='button'
              className='absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6'
            >
              <SvgComponent
                name='emotions'
                className='w-full h-full fill-current'
              />
            </button>
          </label>
        </div>
        <button
          type='button'
          className='flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6'
        >
          <SvgComponent name='like' className='w-full h-full fill-current' />
        </button>
      </div>
    </div>
  );
};

export default ChatBoxFooter;
