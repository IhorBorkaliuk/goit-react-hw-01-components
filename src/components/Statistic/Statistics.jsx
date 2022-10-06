import PropTypes from 'prop-types';
import OneStat from './OneStat';



export default function Statistics({ title, stats }) {
    return (
      <section className="statistics">
            {title && <h2>{title}</h2>}

        <ul className="stat-list">
          {stats.map(el => (
            <OneStat key={el.id} stats={el} />
          ))}
        </ul>
      </section>
    );
} 


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};