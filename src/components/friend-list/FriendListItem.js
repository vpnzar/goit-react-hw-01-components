import PropTypes from 'prop-types';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className="item" id={id}>
      <span
        className={isOnline === true ? 'status online' : 'status offline'}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
