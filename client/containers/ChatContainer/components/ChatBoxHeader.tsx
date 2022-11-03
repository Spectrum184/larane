import SvgComponent from '~/components/SvgComponent';
import Image from 'next/image';
import React from 'react';

const ChatBoxHeader = () => {
  return (
    <div className='chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow'>
      <div className='flex'>
        <div className='w-12 h-12 mr-4 relative flex flex-shrink-0 hover:cursor-pointer hover:opacity-80'>
          <Image
            className='shadow-md rounded-full w-full h-full object-cover'
            src='/images/avatar.jpeg'
            alt=''
            layout='fill'
          />
        </div>
        <div className='text-sm'>
          <p className='font-bold text-gray-700 hover:underline hover:cursor-pointer dark:text-white'>
            Scarlett Johansson
          </p>
          <p className='text-gray-500'>Active 1h ago</p>
        </div>
      </div>

      <div className='flex'>
        <a
          href='#'
          className='block rounded-full hover:opacity-80 bg-slate-400 w-10 h-10 p-2'
        >
          <SvgComponent
            name='tell-call'
            className='w-full h-full fill-current text-white stroke-0'
          />
        </a>
        <a
          href='#'
          className='block rounded-full hover:opacity-80 bg-slate-400 w-10 h-10 p-2 ml-4'
        >
          <SvgComponent
            name='video-call'
            className='w-full h-full fill-current text-white stroke-0'
          />
        </a>
        <a
          href='#'
          className='block rounded-full hover:opacity-80 bg-slate-400 w-10 h-10 p-2 ml-4'
        >
          <SvgComponent
            name='conversation-inf'
            className='w-full h-full fill-current text-white stroke-0'
          />
        </a>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
