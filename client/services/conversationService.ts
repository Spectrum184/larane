import { API_V1 } from '~/constants';
import { AxiosInstance } from 'axios';

class ConversationService {
  axios: AxiosInstance;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getAllConversation(userId: number) {
    try {
      const { data } = await this.axios.get(
        `${API_V1}/conversations/${userId}`,
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

export default ConversationService;
