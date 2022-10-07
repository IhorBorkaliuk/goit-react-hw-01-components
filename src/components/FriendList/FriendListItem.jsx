import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './Friends.styled';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <Item>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User avatar"/>
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.prototype = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
