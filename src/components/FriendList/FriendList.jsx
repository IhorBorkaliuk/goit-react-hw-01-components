import PropTypes from 'prop-types';
import { List, Avatar, Name, Status, Item } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(el => {
        return (
          <Item key={el.id}>
            <Status status={el.isOnline} />
            <Avatar src={el.avatar} alt="User avatar" />
            <Name>{el.name}</Name>
          </Item>
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
