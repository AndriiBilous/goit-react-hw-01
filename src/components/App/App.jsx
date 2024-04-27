import userData from '../../userData.json';
import friends from '../../friends.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';
import css from './App.module.css';

function App() {
  return (
    <div>
      <div className={css.container}>
        <Profile data={userData} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
}

export default App;
