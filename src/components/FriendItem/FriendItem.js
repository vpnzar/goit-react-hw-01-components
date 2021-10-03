import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} id={id}>
      <span
        className={`${s.status}
          + ${isOnline === true ? s.online : s.offline}`}
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  name: 'Friend',
  avatar: 'https://data.whicdn.com/images/346390524/original.jpg',
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
