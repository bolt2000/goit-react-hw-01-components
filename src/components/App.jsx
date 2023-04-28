import { UserProfile } from './Profile/Profile';
import { Statistics } from './Statistics/Statictics';
import { Friends } from './FriendList/Friends';
import { TransactionHistory } from './History/History';
import user from '../data/user.json';
import data from '../data/data.json';
import friendsList from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <UserProfile data={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
