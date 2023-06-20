import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/selectors';
import { StyledUserMenu } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <StyledUserMenu>
      <p>{userEmail}</p>
      <button onClick={onClick} type="button">
        Log out 🔒
      </button>
    </StyledUserMenu>
  );
}
