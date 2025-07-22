import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Category() {
  const { name } = useParams();

  // Example product data:
  const allProducts = [
    { id: 1, name: 'Cool Tee', category: 'Tees', price: 40, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Wind Jacket', category: 'Jackets', price: 120, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Snapback Cap', category: 'Caps', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Leather Gloves', category: 'Accessories', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Limited Edition Tee', category: 'Limited', price: 80, image: 'https://via.placeholder.com/150' },
  ];

  // Filter products by category name
  const products = allProducts.filter(p => p.category.toLowerCase() === name.toLowerCase());

  return (
    <div>
      <h1>Category: {name}</h1>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="flex">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <Link to="/">← Back to Home</Link>
    </div>
  );
}
