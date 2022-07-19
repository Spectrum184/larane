import { conversationService } from '~/services';
import useSWR from 'swr';

interface IUserConversation {
  userId: number;
}

export const useConversations = ({ userId }: IUserConversation) => {
  const { data: conversations, error } = useSWR('get/conversations', () =>
    conversationService.getAllConversation(userId)
  );

  console.log(error);

  return {
    conversations,
    isLoading: !error && !conversations,
    isError: !!error,
  };
};
