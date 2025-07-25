import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}
