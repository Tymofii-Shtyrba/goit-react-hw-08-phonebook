import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoginStatus } from 'redux/auth/selectors';
import { StyledNavigation } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(selectLoginStatus);

  return (
    <StyledNavigation>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </StyledNavigation>
  );
}
