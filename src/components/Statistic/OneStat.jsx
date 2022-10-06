import PropTypes from 'prop-types';

export default function OneStat({ stats }) {
  const { label, percentage } = stats;
  return (
    <li>
      <span className={label}>{label}</span>
      <span className={percentage}>{percentage}%</span>
    </li>
  );
}

OneStat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
