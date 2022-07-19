import { ILogin, IRegister } from '~/interface';
import { handleAxiosError } from '~/libs';
import { AxiosInstance } from 'axios';

class AuthService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async login(dataLogin: ILogin) {
    try {
      const { data, status } = await this.axios.post('login', dataLogin);

      return { status, data };
    } catch (error) {
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

  async register(dataRegister: IRegister) {
    try {
      const { data, status } = await this.axios.post('register', {
        ...dataRegister,
        password_confirmation: dataRegister.confirmPassword,
      });

      return {
        status,
        data,
      };
    } catch (error) {
      return handleAxiosError(error);
    }
  }
}

export default AuthService;
