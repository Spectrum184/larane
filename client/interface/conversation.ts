export interface IConversation {
  creatorId: number;
  id: number;
  image?: string | null;
  lastMessage?: string | null;
  lastMessageAt?: string | null;
  theme?: number;
  title: string;
}
