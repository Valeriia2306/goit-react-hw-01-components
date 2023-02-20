import PropTypes from 'prop-types';
import {
  UserCard,
  Description,
  UserName,
  UserImage,
  Info,
  StatsList,
  Stats,
  Label,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserCard>
      <Description>
        <UserImage src={avatar} alt={username} width="140" />
        <UserName>{username}</UserName>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <StatsList>
        <Stats>
          <Label>Followers</Label>
          {followers}
        </Stats>
        <Stats>
          <Label>Views</Label>
          {views}
        </Stats>
        <Stats>
          <Label>Likes</Label>
          {likes}
        </Stats>
      </StatsList>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
