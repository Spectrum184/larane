import ConversationCard from './ConversationCard';
import React, { useState } from 'react';

const ConversationContainer = () => {
  const [searchMessage, setSearchMessage] = useState<string>('');

  const onSubmit = () => {};

  return (
    <section className='flex flex-col flex-none overflow-auto w-24 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out '>
      <div className='p-4 flex flex-row justify-between items-center flex-none rounded-t-xl'>
        <p className='text-md font-bold hidden md:block group-hover:block text-black dark:text-white'>
          Messenger
        </p>
        <a
          href='#'
          className='block rounded-full hover:opacity-80 bg-gray-400 w-10 h-10 p-2 md:block group-hover:block text-white'
        >
          <svg viewBox='0 0 24 24' className='w-full h-full fill-current'>
            <path d='M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z' />
          </svg>
        </a>
      </div>
      <div className='p-4 flex-none'>
        <form onSubmit={onSubmit}>
          <div className='relative'>
            <label>
              <input
                className='rounded-full py-2 pr-6 pl-10 w-full border border-gray-400 bg-white dark:bg-gray-800 focus:outline-none text-gray-200'
                type='text'
                value={searchMessage}
                onChange={(e) => setSearchMessage(e.target.value)}
                placeholder='Search Messenger'
              />
              <span className='absolute top-0 left-0 mt-2 ml-3 inline-block'>
                <svg viewBox='0 0 24 24' className='w-6 h-6'>
                  <path
                    fill='#bbb'
                    d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
                  />
                </svg>
              </span>
            </label>
          </div>
        </form>
      </div>
      <ConversationCard />
    </section>
  );
};

export default ConversationContainer;
