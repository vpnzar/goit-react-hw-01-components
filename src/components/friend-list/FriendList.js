import './FriendList.css';
import FriendListItem from './FriendListItem';
import friends from './friends.json';

function FriendList() {
  return (
    <ul className="FriendList">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;
