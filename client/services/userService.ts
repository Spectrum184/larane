import { IUser } from './../interface/user';
import { handleAxiosError } from '~/libs';
import { FRONTEND_URL } from '~/constants';
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
      const res = await this.axios.get('api/user', {
        headers: {
          cookie: cookies || '',
          accept: 'application/json',
          referer: FRONTEND_URL,
        },
      });

      return { data: res.data, status: res.status };
    } catch (error) {
      return handleAxiosError(error);
    }
  }
}

export default UserService;
