import PropTypes from 'prop-types';
import { getRandomHexColor } from '../utilis/getRandomColor';
import {
  Title,
  Section,
  StatList,
  StatItem,
  StatLabel,
  StatPercent,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} backgroundColor={getRandomHexColor()}>
              <StatLabel>{label}</StatLabel>
              <StatPercent>{percentage}%</StatPercent>
            </StatItem>
          );
        })}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
