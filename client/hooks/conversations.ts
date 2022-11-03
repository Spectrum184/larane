import { conversationService } from '~/services';
import { IConversation } from '~/interface';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

interface IUserConversation {
  userId?: number;
}

export const useConversations = ({ userId }: IUserConversation) => {
  const [listConversations, setListConversation] =
    useState<Array<IConversation> | null>([]);
  const [conversation, setConversation] = useState<IConversation | null>(null);

  const { data, error } = useSWR('get/conversations', () =>
    conversationService.getAllConversation(userId || 1)
  );

  useEffect(() => {
    setListConversation(data);
  }, [data]);

  const handleSetConversation = (id: number) => {
    if (!listConversations) return setConversation(null);
    const data = listConversations.find((item) => item.id === id);
    if (!data) return setConversation(null);
    setConversation(data);
  };

  return {
    listConversations,
    isLoading: !error && !listConversations,
    isError: !!error,
    conversation,
    handleSetConversation,
  };
};
