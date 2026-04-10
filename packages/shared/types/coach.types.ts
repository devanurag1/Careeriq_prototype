/** A single message in the AI coach conversation */
export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

/** A chat session with one or more messages */
export interface ChatSession {
  id: string;
  userId: string;
  messages: ChatMessage[];
  createdAt: string;
}

/** Input payload for sending a coach message */
export interface SendMessageInput {
  message: string;
  sessionId?: string;
}
