import { INTERNAL_SERVER_ERROR, SUCCESS_MESSAGE } from '~/constants';
import { toast } from 'react-toastify';

export const showToast = (
  status: number,
  message: undefined | unknown | string
) => {
  const newMessage = typeof message === 'string' ? message : undefined;

  if (status < 300) {
    toast.success(newMessage || SUCCESS_MESSAGE);
  } else {
    toast.error(newMessage || INTERNAL_SERVER_ERROR);
  }
};
