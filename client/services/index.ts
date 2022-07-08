import AuthService from './authService';
import UserService from './userService';
import { axios } from '~/libs';

export const authService = new AuthService(axios);
export const userService = new UserService(axios);
