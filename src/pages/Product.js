import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Cool Tee', category: 'Tees', price: 40, description: 'A cool and comfy tee.', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Wind Jacket', category: 'Jackets', price: 120, description: 'A stylish jacket.', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Snapback Cap', category: 'Caps', price: 25, description: 'A trendy cap.', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Leather Gloves', category: 'Accessories', price: 30, description: 'Premium gloves.', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Limited Edition Tee', category: 'Limited', price: 80, description: 'Limited edition.', image: 'https://via.placeholder.com/300' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
