import { handleAxiosError } from '~/libs';
import { AxiosInstance } from 'axios';

class AuthService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getCsrf() {
    try {
      return await this.axios.get('/sanctum/csrf-cookie');
    } catch (error) {
      handleAxiosError(error);
    }
  }
}

export default AuthService;
