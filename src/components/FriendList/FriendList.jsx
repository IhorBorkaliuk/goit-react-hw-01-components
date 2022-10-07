import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './Friends.styled';


export default function FriendList({ friends }) {
    return (
        <List>
            {friends.map(el => (
                <FriendListItem key={el.id} friend={el} />
        ))}
        </List>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array,
};