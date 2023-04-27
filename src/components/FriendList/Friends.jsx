import css from './Friends.module.css'
import PropTypes from 'prop-types'
import { Friend } from '../FriendList/FriendList'

export const Friends = ({ friends }) => {
    return (
        <ul class={css.friendList}>
            {friends.map(({id, name, avatar, isOnline}) => (
                <Friend
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline} />
           ))}
      </ul>
    
                
    );
}

Event.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}