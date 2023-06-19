import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/contacts">Contacts</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
