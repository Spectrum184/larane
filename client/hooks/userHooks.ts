import { axios } from '~/libs';
import { IUser } from '~/interface';
import useSWR from 'swr';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useUser = () => {
  const { data: user, error } = useSWR(
    'user',
    () =>
      axios
        .get('api/user')
        .then((res) => res.data)
        .catch((error) => error.response),
    {
      refreshInterval: 0,
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (error) router.push('/login');
  }, [error, router]);

  return {
    user,
    error,
  } as {
    user: IUser;
    error: any;
  };
};
