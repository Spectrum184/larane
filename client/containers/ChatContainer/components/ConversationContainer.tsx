import ConversationCard from './ConversationCard';
import SvgComponent from '~/components/SvgComponent';
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
          className='block rounded-full hover:opacity-80 bg-slate-400 w-10 h-10 p-2 md:block group-hover:block text-white'
        >
          <SvgComponent
            name='new-chat'
            className='w-full h-full fill-current stroke-0'
          />
        </a>
      </div>
      <div className='p-4 flex-none'>
        <form onSubmit={onSubmit}>
          <div className='relative'>
            <label>
              <input
                className='rounded-full py-2 pr-6 pl-10 w-full border border-gray-400 bg-white focus:outline-none text-gray-200'
                type='text'
                value={searchMessage}
                onChange={(e) => setSearchMessage(e.target.value)}
                placeholder='Search Messenger'
              />
              <span className='absolute top-0 left-0 mt-2 ml-3 inline-block'>
                <SvgComponent
                  name='search'
                  className='w-6 h-6 stroke-gray-300'
                />
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
