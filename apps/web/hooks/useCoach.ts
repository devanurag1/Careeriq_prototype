import { useMutation } from '@tanstack/react-query';
import { coachApi } from '@/services/api/coach.api';
import { useState } from 'react';

export function useCoach() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [sessionId, setSessionId] = useState<string | undefined>();

  const send = useMutation({
    mutationFn: (text: string) => coachApi.sendMessage(text, sessionId),
    onMutate: async (text) => {
      setMessages((prev) => [...prev, { role: 'user', content: text }]);
    },
    onSuccess: (response) => {
      // @ts-ignore
      const { reply, sessionId: newId } = response.data || response;
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      if (newId) setSessionId(newId);
    },
  });

  return {
    messages,
    sendMessage: send.mutate,
    isSending: send.isPending,
  };
}
