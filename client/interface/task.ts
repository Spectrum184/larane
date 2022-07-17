export interface ITask {
  id?: number;
  title: string;
  content: string;
  workDate: string;
  done: number;
  type: number;
  createdAt?: string;
  userId: number;
  userName?: string;
}
