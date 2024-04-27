import css from './ProfileList.module.css';
function ProfileList({ data }) {
  {
    const { followers, views, likes } = data;
    return (
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.text}>Followers </span>

          <span className={css.span}>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Views </span>

          <span className={css.span}>
            <b>{views}</b>
          </span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Likes </span>

          <span className={css.span}>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    );
  }
}
export default ProfileList;
