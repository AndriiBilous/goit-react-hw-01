import css from '../Profile/Profile.module.css';
import ProfileList from '../ProfileList/ProfileList';

function Profile({ data }) {
  {
    const { username, tag, location, avatar, stats } = data;
    return (
      <>
        <div key={data.id} className={css.container}>
          <img
            className={css.img}
            src={avatar}
            alt={username}
            width="200"
            height="200"
          />
          <p className={css.title}>
            <b>{username}</b>
          </p>
          <p className={css.text}>{tag}</p>
          <p className={css.text}>{location}</p>
        </div>
        <ProfileList data={stats} />
      </>
    );
  }
}
export default Profile;
