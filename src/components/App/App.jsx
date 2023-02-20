// Import data
import user from '../data/user.json';
import statsData from '../data/statistic.json';
import friendsData from '../data/friendList.json';
import transactions from '../data/transactions.json';
// Import Components
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendsList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
}
