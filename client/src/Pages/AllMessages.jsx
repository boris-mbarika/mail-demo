import React from 'react';
import '../css/inbox-message.css';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAllMessages } from '../services/api';
import { user } from '../user';
import { truncateText } from '../helpers/message';

function AllMessages() {
  const navigate = useNavigate();

  const {
    data: messages,
    isFetching,
    isError,
  } = useQuery('messages', () => getAllMessages(user.uid), {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return (
    <div className=' header-wrapper'>
      <h1 className="all-messages">Messages</h1>
      <div className="item-block" style={{ cursor: 'pointer' }}>
        {isFetching ? (
          <center ><p style={{color:"white"}}>Loading...</p></center>
        ) : isError ? (
          <center ><p style={{color:"white"}}> Something went wrong</p></center>
        ) : (
          messages?.map((msg) => (
            <div
              className="content"
              key={msg._id}
              onClick={() => navigate(`/messages/${msg._id}`)}
            >
              <h1 style={{ fontWeight: msg.isRead ? 'normal' : 'bold' }}>
                {msg.subject}
              </h1>
              <p>{truncateText(msg.content.replace(/\\n/g,''), 30)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllMessages;
