import PropTypes from 'prop-types';
import { ProfileWrap, Avatar, Description, Name, Tag, Loc, Stats, Label, Quentity } from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrap>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Loc>{location}</Loc>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quentity>{stats.followers}</Quentity>
        </li>
        <li>
          <Label>Views</Label>
          <Quentity>{stats.views}</Quentity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quentity>{stats.likes}</Quentity>
        </li>
      </Stats>
    </ProfileWrap>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
