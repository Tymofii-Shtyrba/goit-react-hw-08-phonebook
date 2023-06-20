import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from 'redux/auth/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectLoginStatus);

  return (
    <nav>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
