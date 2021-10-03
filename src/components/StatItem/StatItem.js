import s from './StatItem.module.css';
import PropTypes from 'prop-types';

function StatItem({ id, label, percentage }) {
  return (
    <li
      style={{ backgroundColor: `${changeColor()}` }}
      className={s.item}
      id={id}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage + '%'}</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

function changeColor() {
  const rdmColor = () => (Math.random() * 256) >> 0;
  const varColor = `rgb(${rdmColor()}, ${rdmColor()}, ${rdmColor()})`;
  return varColor;
}

export default StatItem;
