import Image from 'next/image';
import React from 'react';

const mockData = [
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },

  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
  {
    name: 'Angelina Jolie',
    lastMessage: 'Ok, see you at the subway in a bit.',
    lastMessageAt: 'Just now',
  },
];

const ConversationCard = () => {
  return (
    <div className='contacts p-2 flex-1 overflow-y-scroll'>
      {mockData.map((item, index) => (
        <div
          className='flex justify-between items-center p-3 hover:bg-gray-300 bg-gray-200 my-2 rounded-lg relative hover:cursor-pointer'
          key={index}
        >
          <div className='w-16 h-16 relative flex flex-shrink-0'>
            <Image
              className='shadow-md rounded-full w-full h-full object-cover'
              src='/images/conversation.png'
              alt='avatar'
              layout='fill'
            />
          </div>
          <div className='flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block'>
            <p className='text-black'>{item.name}</p>
            <div className='flex items-center text-sm text-gray-600'>
              <div className='min-w-0'>
                <p className='truncate'>{item.lastMessage}</p>
              </div>
              <p className='ml-2 whitespace-no-wrap'>{item.lastMessageAt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationCard;
