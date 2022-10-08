import PropTypes from 'prop-types';
import { ProfileWrap, Avatar, Description, Name, Tag, Loc, Stats, StatsElement, Label, Quentity } from './Profile.styled';

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
        <StatsElement>
          <Label>Followers</Label>
          <Quentity>{stats.followers}</Quentity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quentity>{stats.views}</Quentity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quentity>{stats.likes}</Quentity>
        </StatsElement>
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
