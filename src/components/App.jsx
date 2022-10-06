import Profile from "./Profile/Profile";
import Statistics from "./Statistic/Statistics";
import user from "../user.json"
import data from '../data.json';





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
    </div>
  );
};
