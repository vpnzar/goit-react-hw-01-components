import PropTypes from 'prop-types';

function StatItem({ id, label, percentage }) {
  return (
    <li className="item" id={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default StatItem;
