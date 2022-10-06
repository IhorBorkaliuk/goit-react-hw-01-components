import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(el => (
                <FriendListItem key={el.id} friend={el} />
        ))}
        </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array,
};