import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(item => {
        return (
          <li key={item.id} className={css.item}>
            <FriendListItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
