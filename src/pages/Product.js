import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <input placeholder="Search…" />
      <p>(Search shows matching products or empty state if none)</p>
    </div>
  );
}
