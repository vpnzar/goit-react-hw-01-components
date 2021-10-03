import './App.css';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/SocialProfile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import friends from './components/FriendList/friends.json';
import user from './components/SocialProfile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
