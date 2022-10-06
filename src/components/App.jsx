import Profile from "./Profile/Profile";
import Statistics from "./Statistic/Statistics";
import FriendList from "./FriendList/FriendList";

import user from 'json/user.json'
import data from 'json/data.json'
import friends from 'json/friends.json'





export const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
};
