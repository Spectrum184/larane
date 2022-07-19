import AuthService from './authService';
import UserService from './userService';
import TaskService from './taskService';
import ConversationService from './conversationService';
import { axios } from '~/libs';

export const authService = new AuthService(axios);
export const userService = new UserService(axios);
export const taskService = new TaskService(axios);
export const conversationService = new ConversationService(axios);
