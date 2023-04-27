import css from './Friends.module.css'
import PropTypes from 'prop-types'

export const Friend = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
            
            <span className={isOnline
                ? `${css.statusOnline}`
                : `${css.statusOffline}`
            }></span>
            
                    <img className={css.avatar} src={avatar} alt={name} width="48" />
                    < p className={css.name}>{name}</p>
                </li>       
    );
}


Event.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}