import AuthService from './authService';
import { axios } from '~/libs';

export const authService = new AuthService(axios);
