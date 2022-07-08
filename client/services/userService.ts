import { IUser } from './../interface/user';
import { handleAxiosError } from '~/libs';
import { AxiosInstance } from 'axios';

class UserService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getUser(): Promise<{
    data: IUser | unknown;
    status: number;
  }> {
    try {
      const res = await this.axios.get('api/user');

      return { data: res.data, status: res.status };
    } catch (error) {
      return handleAxiosError(error);
    }
  }
}

export default UserService;
