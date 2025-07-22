import { Link } from 'react-router-dom';

export default function Home() {
  const categories = ['Tees', 'Jackets', 'Caps', 'Accessories', 'Limited'];

  return (
    <div>
      <h1>F1 Streetwear</h1>
      <button><Link to="/category/Tees">View All</Link></button>

      <h2>Categories</h2>
      <ul>
        {categories.map((cat, idx) => (
          <li key={idx}>
            {idx === 0 ? (
              <Link to={`/category/${cat}`}>{cat}</Link>
            ) : (
              <span>{cat}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
