import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '0.5rem' }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} width="150" />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}
