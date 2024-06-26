import React from 'react';
import '../css/All-messages.css';
import { useQuery } from 'react-query';
import { getMessageById } from '../services/api';
import { useParams } from 'react-router-dom';

function MessageDetails() {
  const { messageId } = useParams();

  const {
    data: message,
    isFetching,
    isError,
  } = useQuery(['message', messageId], () => getMessageById(messageId), {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  if (isFetching) return <center className="text-light">Loading...</center>;
  if (isError)
    return <center className="text-light">Something went wrong</center>;

  return (
    <div className="mesaages">
      <h1>{message.subject}</h1>
      <div className="msg-container">
        <div
          className="msg  msg-box"
          dangerouslySetInnerHTML={{
            __html: message.content.replace(/\\n/g, '<br />'),
          }}
        />
      </div>
    </div>
  );
}

export default MessageDetails;
