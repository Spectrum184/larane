import { taskService } from '~/services';
import { ITask } from '~/interface/task';
import useSWR from 'swr';

interface IUserTask {
  tasks: Array<ITask>;
  isLoading: boolean;
  isError: any;
}

export const useTask = (): IUserTask => {
  const { data: tasks, error } = useSWR('get/tasks', () =>
    taskService.getTaskByMonth()
  );

  return { tasks, isLoading: !error && !tasks, isError: !!error };
};
