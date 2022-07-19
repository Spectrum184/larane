import { IUser } from './../interface/user';
import { handleAxiosError } from '~/libs';
import { FRONTEND_URL, API_V1 } from '~/constants';
import { AxiosInstance } from 'axios';

class UserService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getUser(cookies: string | undefined): Promise<{
    data: IUser | unknown;
    status: number;
  }> {
    try {
      const { data, status } = await this.axios.get(`${API_V1}/user`, {
        headers: {
          cookie: cookies || '',
          accept: 'application/json',
          referer: FRONTEND_URL,
        },
      });

      return {
        data: {
          ...data,
          createAt: data.created_at,
          roomNo: data.room_no,
          isActive: data.is_active,
        },
        status: status,
      };
    } catch (error) {
      return handleAxiosError(error);
    }
  }
}

export default UserService;
