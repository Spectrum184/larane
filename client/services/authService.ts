import { ILogin, IRegister } from '~/interface';
import { handleAxiosError } from '~/libs';
import { AxiosInstance } from 'axios';

class AuthService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async login(data: ILogin) {
    try {
      const res = await this.axios.post('/login', data);

      return { status: res.status, data: res.data };
    } catch (error) {
      console.log(error);

      return handleAxiosError(error);
    }
  }

  async getCsrf() {
    try {
      return await this.axios.get('sanctum/csrf-cookie');
    } catch (error) {
      return handleAxiosError(error);
    }
  }

  async register(data: IRegister) {
    try {
      const res = await this.axios.post('/register', {
        ...data,
        password_confirmation: data.confirmPassword,
      });

      return {
        status: res.status,
        data: res.data,
      };
    } catch (error) {
      return handleAxiosError(error);
    }
  }
}

export default AuthService;
