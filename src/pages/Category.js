import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { name } = useParams();
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 150, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Category: {name}</h1>
      <div style={{ display: 'flex' }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
