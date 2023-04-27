import css from './Profile.module.css'
import PropTypes from 'prop-types'




export const UserProfile = ({ data }) => {
    // console.log(data);
    const { username, tag, location, avatar} = data;
    return (
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                className={css.avatar}
            />
            <p className={css.name}>{data.username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
<ul className={css.stats}>
             <li>
                 <span className={css.label}>Followers</span>
                 <span className={css.quantity}>{data.stats.followers}</span>
             </li>
             <li>
                 <span className={css.label}>Views</span>
                 <span className={css.quantity}>{data.stats.views}</span>
             </li>
             <li>
                 <span className={css.label}>Likes</span>
                 <span className={css.quantity}>{data.stats.likes}</span>
             </li>
         </ul>
    </div>
  );   
}


 UserProfile.propTypes = {
   data: PropTypes.shape({
     username: PropTypes.string.isRequired,
     tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired,
  }).isRequired,
};