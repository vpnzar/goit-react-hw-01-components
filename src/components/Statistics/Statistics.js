import './Statistics.css';
import StatItem from '../StatItem/StatItem';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            id={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
