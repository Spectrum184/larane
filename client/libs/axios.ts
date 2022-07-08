import { BACKEND_URL } from '~/constants';
import Axios, { AxiosError } from 'axios';

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
    return {
      status: errors.response?.status || 500,
      data: errors.response?.data,
    };
  } else {
    return {
      status: 500,
      data: errors.message,
    };
  }
};
