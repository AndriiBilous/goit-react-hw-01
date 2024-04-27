import css from './FriendListItem.module.css';
import clsx from 'clsx';
let status = false;
function FriendListItem({ data }) {
  const { avatar, name, isOnline } = data;
  return (
    <div className={css.container}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
      <p
        className={clsx('text', status === isOnline ? css.offline : css.online)}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
export default FriendListItem;
