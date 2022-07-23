import ConversationContainer from './components/ConversationContainer';
import ChatBoxContainer from './components/ChatBoxContainer';
import Layout from '~/components/Layout';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ChatContainer: FC = () => {
  const router = useRouter();

  return (
    <Layout showFooter={false}>
      <div className='h-chat-page w-full flex bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-xl'>
        <div className='flex-1 flex flex-col'>
          <div className='flex-grow flex flex-row min-h-0'>
            <ConversationContainer />
            {router.pathname === '/chat' ? (
              <div className='flex flex-col flex-auto border-l border-gray-300 items-center justify-center'>
                <h3 className='text-red-600 text-2xl font-bold'>
                  Welcome to Diamond Messenger!
                </h3>
                <div className='relative w-80 h-80'>
                  <Image
                    src='/images/messenger.png'
                    alt='messenger'
                    layout='fill'
                    priority
                  />
                </div>
              </div>
            ) : (
              <ChatBoxContainer />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatContainer;
