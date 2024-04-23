import { Link } from 'react-router-dom';
import '../css/Home.css';
import { useQuery } from 'react-query';
import { getAllMessages } from '../services/api';
import { user } from '../user';
import { useMemo } from 'react';
import { getMessagesCountInfo } from '../helpers/message';

function Home() {
  const { data } = useQuery('messages', () => getAllMessages(user.uid), {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const countInfo = useMemo(() => getMessagesCountInfo(data ?? []), [data]);

  return (
    <div className="home">
      <div className="greet-user">
        <p>Hello {user.username}</p>
      </div>
      <div className="readmsg">
        <p>
          You have {countInfo.unreadCount} unread messages out of{' '}
          {countInfo.total}
        </p>
      </div>
      <div className="view-messages">
        <Link to="/messages">View Messages</Link>
      </div>
    </div>
  );
}

export default Home;
