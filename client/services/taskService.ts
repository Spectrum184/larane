import { AxiosInstance } from 'axios';

class TaskService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getTask(date: string) {}
}

export default TaskService;
