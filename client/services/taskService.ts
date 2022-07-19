import { API_V1 } from '~/constants';
import { ITask } from '~/interface/task';
import { AxiosInstance } from 'axios';
import dayjs from 'dayjs';

class TaskService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getTaskByMonth(date?: string): Promise<Array<ITask> | undefined> {
    try {
      const currentDate = date ? date : dayjs().format('YYYY-MM-DD');

      const { data } = await this.axios.get(
        `${API_V1}/tasks/month/${currentDate}`,
        {
          headers: {
            accept: 'application/json',
          },
        }
      );

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default TaskService;
