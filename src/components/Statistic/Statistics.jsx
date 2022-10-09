import PropTypes from 'prop-types';
import { StatisticsStyle, StatList, Label, Element, Percentage } from './Statistics.styled';



export default function Statistics({ title, stats }) {
  
    return (
      <StatisticsStyle>
            {title && <h2>{title}</h2>}

        <StatList>
          {stats.map(el => {
            return (
              <Element key={el.id}>
                <Label>{el.label}</Label>
                <Percentage>{el.percentage}%</Percentage>
              </Element>
            );
          })}
        </StatList>
      </StatisticsStyle>
  );
} 


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};


export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}