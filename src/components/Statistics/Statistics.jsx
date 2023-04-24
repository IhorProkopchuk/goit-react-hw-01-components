import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color;
  do {
    color = '#';
    for (let i = 0; i < 6; i+=1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } while (color === '#FFFFFF'); 
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2>{title}</h2>}

      <ul className={css.stat}>
        {stats.map(stat => {
          return (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};



Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};