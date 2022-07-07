import { BACKEND_URL, INTERNAL_SERVER_ERROR } from '~/configs';
import Axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const axios = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export const handleAxiosError = (error: unknown) => {
  const errors = error as Error | AxiosError;
  if (Axios.isAxiosError(errors)) {
    toast.error(INTERNAL_SERVER_ERROR);
  } else {
    toast.error(INTERNAL_SERVER_ERROR);
  }
};
