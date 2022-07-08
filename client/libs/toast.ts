import { INTERNAL_SERVER_ERROR, SUCCESS_MESSAGE } from '~/constants';
import { toast } from 'react-toastify';

export const showToast = (status: number, message: string | undefined) => {
  if (status < 300) {
    toast.success(message || SUCCESS_MESSAGE);
  } else {
    toast.error(message || INTERNAL_SERVER_ERROR);
  }
};
