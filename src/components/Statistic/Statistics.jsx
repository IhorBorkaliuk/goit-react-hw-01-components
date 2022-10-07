import PropTypes from 'prop-types';
import OneStat from './OneStat';
import { StatisticsStyle, StatList } from './Statistics.styled';



export default function Statistics({ title, stats }) {
  
    return (
      <StatisticsStyle>
            {title && <h2>{title}</h2>}

        <StatList>
          {stats.map(el => (
            <OneStat key={el.id} stats={el} />
          ))}
        </StatList>
      </StatisticsStyle>
  );
  
} 


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};