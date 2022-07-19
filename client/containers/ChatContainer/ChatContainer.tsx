import ConversationContainer from './components/ConversationContainer';
import ChatBoxContainer from './components/ChatBoxContainer';
import Layout from '~/components/Layout';
import React, { FC } from 'react';

const ChatContainer: FC = () => {
  return (
    <Layout showFooter={false}>
      <div className='h-chat-page w-full flex bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-xl'>
        <div className='flex-1 flex flex-col'>
          <div className='flex-grow flex flex-row min-h-0'>
            <ConversationContainer />
            <ChatBoxContainer />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatContainer;
