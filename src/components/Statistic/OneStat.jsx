import PropTypes from 'prop-types';

export default function OneStat({ label, percentage }) {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
}

OneStat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
