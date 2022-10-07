import PropTypes from 'prop-types';
import { Label, Element, Percentage } from './Statistics.styled';

export default function OneStat({ stats }) {
  const { label, percentage } = stats;
  return (
    <Element>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Element>
  );
}

OneStat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
